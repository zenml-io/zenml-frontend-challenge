import { z } from "zod";

export const StepZ = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["pending", "running", "completed", "failed"]),
  runtime: z.number().nullable(),
  resources: z.record(z.string()).nullable().optional(),
  artifacts: z.array(z.string()).default([]),
  startTime: z.string().nullable(),
  endTime: z.string().nullable(),
  error: z.string().nullable().optional()
});

export const DependencyZ = z.object({
  source: z.string(),
  target: z.string()
});

export const PipelineExecutionZ = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["pending", "running", "completed", "failed"]),
  startTime: z.string().nullable(),
  endTime: z.string().nullable().optional(),
  steps: z.array(StepZ),
  dependencies: z.array(DependencyZ),
  error: z.string().nullable().optional()
});

export const PipelinesResponseZ = z.object({
  total: z.number(),
  pipelines: z.array(PipelineExecutionZ),
  limit: z.number(),
  offset: z.number()
});

export type PipelineExecution = z.infer<typeof PipelineExecutionZ>;
export type Step = z.infer<typeof StepZ>;
export type PipelinesResponse = z.infer<typeof PipelinesResponseZ>;