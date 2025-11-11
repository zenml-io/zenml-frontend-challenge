import type { PipelineExecution } from "../api/schema";
import type { Edge, Node } from "reactflow";

export function toReactFlow(exec: PipelineExecution): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = exec.steps.map((s) => ({
    id: s.id,
    position: { x: 0, y: 0 }, // laid out later
    data: {
      id: s.id,
      label: s.name,
      status: s.status,
      runtime: s.runtime,
      meta: { resources: s.resources, artifacts: s.artifacts, startTime: s.startTime, endTime: s.endTime }
    },
    type: "zenNode"
  }));

  const edges: Edge[] = exec.dependencies.map((d) => ({
    id: `${d.source}->${d.target}`,
    source: d.source,
    target: d.target,
    animated: true
  }));

  return { nodes, edges };
}