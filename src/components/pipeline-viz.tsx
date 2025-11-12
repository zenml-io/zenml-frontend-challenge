import {
	Background,
	Controls,
	MiniMap,
	ReactFlow,
	useEdgesState,
	useNodesState,
	type Edge,
	type Node,
	type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { StepNode } from "./step-node";

type Props = {
	initialNodes: Node[];
	initialEdges: Edge[];
};

const nodeTypes: NodeTypes = {
	step: StepNode,
};

export function PipelineViz({ initialNodes, initialEdges }: Props) {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);
	return (
		<ReactFlow
			nodes={nodes}
			nodeTypes={nodeTypes}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			edges={edges}
			fitView
		>
			<Controls position="top-left" />
			<MiniMap />
			<Background />
		</ReactFlow>
	);
}
