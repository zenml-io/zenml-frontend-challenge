import { http, HttpResponse } from "msw";
import fixture from "./fixtures/pipelineExecution.json";

export const handlers = [
  // Handle specific pipeline by ID
  http.get("https://zenml-frontend-challenge-backend.fly.dev/pipelines/:id", ({ params }) => {
    const { id } = params;
    if (id === "pipeline-123") {
      return HttpResponse.json(fixture);
    }
    return HttpResponse.json({ error: "Pipeline not found" }, { status: 404 });
  }),

  // Keep the list endpoint for backward compatibility
  http.get("https://zenml-frontend-challenge-backend.fly.dev/pipelines", () => {
    return HttpResponse.json({
      total: 1,
      pipelines: [fixture],
      limit: 1,
      offset: 0
    });
  })
];