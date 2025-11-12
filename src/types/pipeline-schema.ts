import z from "zod";

export const stepSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: z.enum(["pending", "running", "completed", "failed"]),
	runtime: z.number().nullable(),
	resources: z.record(z.string(), z.unknown()).nullable(),
	artifacts: z.array(z.string()),
	startTime: z.string().nullable(),
	endTime: z.string().nullable(),
	error: z.string().nullable().optional(),
});

export const dependencySchema = z.object({
	source: z.string(),
	target: z.string(),
});

export const pipelineSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: z.enum(["pending", "running", "completed", "failed"]),
	startTime: z.string().nullable(),
	endTime: z.string().nullable().optional(),
	steps: z.array(stepSchema),
	dependencies: z.array(dependencySchema),
	error: z.string().nullable().optional(),
});

export type Pipeline = z.infer<typeof pipelineSchema>;
export type Step = z.infer<typeof stepSchema>;
export type Dependency = z.infer<typeof dependencySchema>;
