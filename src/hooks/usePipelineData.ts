import { useEffect, useMemo, useState, useCallback } from "react";
import { fetchLatestExecution } from "../api/client";
import { toReactFlow } from "../layout/normalize";
import { layoutLR } from "../layout/dagreLayout";
import type { PipelineExecution } from "../api/schema";

export function usePipelineData() {
  const [exec, setExec] = useState<PipelineExecution | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async (signal: AbortSignal, attempt = 0) => {
    try {
      setError(null);
      if (attempt === 0) {
        setLoading(true);
      }

      const data = await fetchLatestExecution(signal);
      setExec(data);
      setLoading(false);
      setRetryCount(0);
    } catch (e) {
      if (signal.aborted) return;

      const errorMessage = e instanceof Error ? e.message : "Unknown error";

      // Retry logic for network errors (up to 2 retries)
      if (attempt < 2 && errorMessage.includes("unreachable")) {
        console.warn(`API request failed (attempt ${attempt + 1}), retrying...`);
        setTimeout(() => {
          if (!signal.aborted) {
            fetchData(signal, attempt + 1);
          }
        }, 1000 * (attempt + 1)); // Exponential backoff
        return;
      }

      setError(errorMessage);
      setLoading(false);
      setRetryCount(attempt);
    }
  }, []);

  const retry = useCallback(() => {
    const ctrl = new AbortController();
    fetchData(ctrl.signal);
    return () => ctrl.abort();
  }, [fetchData]);

  useEffect(() => {
    const ctrl = new AbortController();
    fetchData(ctrl.signal);
    return () => ctrl.abort();
  }, [fetchData]);

  const rf = useMemo(() => {
    if (!exec) return { nodes: [], edges: [] };
    const base = toReactFlow(exec);
    return { nodes: layoutLR(base.nodes, base.edges), edges: base.edges };
  }, [exec]);

  return {
    exec,
    rf,
    loading,
    error,
    retry,
    retryCount,
    setExec
  };
}