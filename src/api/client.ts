import { PipelineExecutionZ, type PipelineExecution } from "./schema";
import { PIPELINE_BY_ID_ENDPOINT, DEMO_PIPELINE_ID } from "./endpoints";

export async function fetchLatestExecution(signal?: AbortSignal): Promise<PipelineExecution> {
  // Create timeout controller
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), 10000); // 10 second timeout

  // Use the provided signal or timeout signal
  const requestSignal = signal || timeoutController.signal;

  try {
    // Fetch the specific demo pipeline by ID
    const res = await fetch(PIPELINE_BY_ID_ENDPOINT(DEMO_PIPELINE_ID), {
      signal: requestSignal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API responded with ${res.status}: ${res.statusText}`);
    }

    const json = await res.json();
    const pipeline = PipelineExecutionZ.parse(json);

    return pipeline;
  } catch (error) {
    clearTimeout(timeoutId);

    if (signal?.aborted) {
      throw new Error("Request was cancelled");
    }

    if (timeoutController.signal.aborted) {
      throw new Error("API request timed out. The server may be slow or unreachable.");
    }

    if (error instanceof TypeError && (error.message.includes('fetch') || error.message.includes('Failed to fetch'))) {
      throw new Error("API is unreachable. Please check your network connection or try mock mode with MSW=1");
    }

    // Re-throw other errors with more context
    throw error instanceof Error
      ? new Error(`API Error: ${error.message}`)
      : new Error("Unknown API error occurred");
  }
}