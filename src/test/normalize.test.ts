import { describe, it, expect } from "vitest";
import fixture from "../mocks/fixtures/pipelineExecution.json";
import { toReactFlow } from "../layout/normalize";

describe("normalize", () => {
  it("creates nodes and edges from execution", () => {
    const { nodes, edges } = toReactFlow(fixture as any);
    expect(nodes.length).toBe(fixture.steps.length);
    expect(edges.length).toBe(fixture.dependencies.length);
    expect(edges[0].id).toBe(`${fixture.dependencies[0].source}->${fixture.dependencies[0].target}`);
  });
});