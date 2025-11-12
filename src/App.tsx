import { PipelineViz } from "./components/pipeline-viz";
import pipelineData from "./data/pipeline.json";
import { getEdges, getNodes } from "./services/visualization";
import { pipelineSchema } from "./types/pipeline-schema";

export function App() {
	const pipeline = pipelineSchema.parse(pipelineData);

	const initialNodes = getNodes(pipeline.steps);
	const initialEdges = getEdges(pipeline.dependencies);

	return (
		<PipelineViz initialNodes={initialNodes} initialEdges={initialEdges} />
	);
}
