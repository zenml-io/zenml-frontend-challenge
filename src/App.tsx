import { useMemo } from "react";
import { PipelineViz } from "./components/pipeline-viz";
import { pipeline } from "./data/pipeline";
import { getEdges, getNodes } from "./services/visualization";

export function App() {
	const initialNodes = useMemo(() => getNodes(pipeline.steps), []);
	const initialEdges = useMemo(() => getEdges(pipeline.dependencies), []);

	return (
		<div className="flex h-dvh w-full">
			<PipelineViz initialNodes={initialNodes} initialEdges={initialEdges} />
		</div>
	);
}
