import type { Edge } from "@xyflow/react";
import type { Dependency, Step, StepNode } from "../types/pipeline";

export function getNodes(steps: Step[]): StepNode[] {
	return steps.map((step) => {
		return {
			id: step.id,
			data: step,
			type: "step",
			position: {
				x: Math.floor(Math.random() * 500) + 1,
				y: Math.floor(Math.random() * 500) + 1,
			},
		};
	});
}

export function getEdges(dependencies: Dependency[]): Edge[] {
	return dependencies.map((dependency) => {
		return {
			id: `${dependency.source}-${dependency.target}`,
			source: dependency.source,
			target: dependency.target,
		};
	});
}
