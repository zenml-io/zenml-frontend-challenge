import type { Node } from "@xyflow/react";

export type Pipeline = {
	id: string;
	name: string;
	status: string;
	startTime: string;
	steps: Step[];
	dependencies: Dependency[];
};

export type Step = {
	id: string;
	name: string;
	status: string;
	runtime?: number | null;
	resources?: Record<string, unknown> | null;
	artifacts: string[];
	startTime?: string | null;
	endTime?: string | null;
};

export type Dependency = {
	source: string;
	target: string;
};

type NodeTypes = "step";

export type StepNode = Node<Step, NodeTypes>;
