import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Box } from "@zenml-io/react-component-library";
import type { StepNode as StepNodeType } from "../types/nodes";

type Props = NodeProps<StepNodeType>;

export function StepNode({ data }: Props) {
	return (
		<Box className="p-1">
			<div>{data.name}</div>
			<Handle type="target" position={Position.Top} />
			<Handle type="source" position={Position.Bottom} />
		</Box>
	);
}
