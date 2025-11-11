import { render, screen, waitFor } from "@testing-library/react";
import App from "../app/App";

// Tiny stub to skip MSW in unit tests; we assume network off.
vi.mock("../hooks/usePipelineData", async () => {
  const fixture = await import("../mocks/fixtures/pipelineExecution.json");
  const { toReactFlow } = await import("../layout/normalize");
  const { layoutLR } = await import("../layout/dagreLayout");
  const rf = toReactFlow(fixture as any);
  return {
    usePipelineData: () => ({
      exec: fixture,
      rf: { nodes: layoutLR(rf.nodes, rf.edges), edges: rf.edges },
      loading: false,
      error: null,
      retry: vi.fn(),
      retryCount: 0,
      setExec: vi.fn()
    })
  };
});

describe("App", () => {
  it("renders graph and details panel prompt", async () => {
    render(<App />);
    await waitFor(() => screen.getByText(/AI Training Pipeline/i));
    screen.getByText(/Select a step/i);
  });
});