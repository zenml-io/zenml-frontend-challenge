import type { Pipeline } from "../types/pipeline";

export const pipeline: Pipeline = {
	id: "pipeline-123",
	name: "Training Pipeline",
	status: "running",
	startTime: "2025-03-31T10:00:00Z",
	steps: [
		{
			id: "step-1",
			name: "Data Loading",
			status: "completed",
			runtime: 45, // seconds
			resources: { cpu: "2 cores", memory: "4GB" },
			artifacts: ["dataset.csv"],
			startTime: "2025-03-31T10:00:00Z",
			endTime: "2025-03-31T10:00:45Z",
		},
		{
			id: "step-2",
			name: "Data Preprocessing",
			status: "completed",
			runtime: 120,
			resources: { cpu: "4 cores", memory: "8GB" },
			artifacts: ["processed_data.pkl"],
			startTime: "2025-03-31T10:00:45Z",
			endTime: "2025-03-31T10:02:45Z",
		},
		{
			id: "step-3",
			name: "Model Training",
			status: "running",
			runtime: 350, // so far
			resources: { cpu: "8 cores", memory: "16GB", gpu: "1 GPU" },
			artifacts: [],
			startTime: "2025-03-31T10:02:45Z",
			endTime: null,
		},
		{
			id: "step-4",
			name: "Evaluation",
			status: "pending",
			runtime: null,
			resources: null,
			artifacts: [],
			startTime: null,
			endTime: null,
		},
		{
			id: "step-5",
			name: "Model Deployment",
			status: "pending",
			runtime: null,
			resources: null,
			artifacts: [],
			startTime: null,
			endTime: null,
		},
	],
	dependencies: [
		{ source: "step-1", target: "step-2" },
		{ source: "step-2", target: "step-3" },
		{ source: "step-3", target: "step-4" },
		{ source: "step-4", target: "step-5" },
	],
};
