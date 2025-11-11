export const BASE_URL = "https://zenml-frontend-challenge-backend.fly.dev";
export const PIPELINES_ENDPOINT = `${BASE_URL}/pipelines`;
export const PIPELINE_BY_ID_ENDPOINT = (id: string) => `${BASE_URL}/pipelines/${id}`;

// Hard-code to a specific pipeline for this demo
export const DEMO_PIPELINE_ID = "pipeline-123";