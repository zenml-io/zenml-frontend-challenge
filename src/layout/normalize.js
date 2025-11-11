export function toReactFlow(exec) {
    const nodes = exec.steps.map((s) => ({
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
    const edges = exec.dependencies.map((d) => ({
        id: `${d.source}->${d.target}`,
        source: d.source,
        target: d.target,
        animated: true
    }));
    return { nodes, edges };
}
