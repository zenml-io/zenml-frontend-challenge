import type { Node } from "@xyflow/react";
import type { Step } from "./pipeline-schema";

type NodeTypes = "step";

export type StepNode = Node<Step, NodeTypes>;
