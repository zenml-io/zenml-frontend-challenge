import React from "react";
import type { Step } from "../../api/schema";
import styles from "./DetailsPanel.module.css";
import { Badge, Box } from "@zenml-io/react-component-library";

type Props = { step: Step | null };

const badgeColor: Record<string, "green" | "blue" | "red" | "grey"> = {
  completed: "green",
  running: "blue",
  failed: "red",
  pending: "grey"
};

export function DetailsPanel({ step }: Props) {
  if (!step) return <div className={styles.panel}>Select a step to view details</div>;
  return (
    <div className={styles.panel}>
      <h3 style={{ marginBottom: '16px', color: 'var(--text)' }}>{step.name}</h3>
      <Box style={{ marginBottom: '12px' }}>
        <Badge color={badgeColor[step.status] ?? "grey"}>
          {step.status}
        </Badge>
      </Box>
      <div style={{ marginBottom: '8px' }}>Runtime: {step.runtime ?? "—"}s</div>
      <div style={{ marginBottom: '8px' }}>Start: {step.startTime ?? "—"}</div>
      <div style={{ marginBottom: '16px' }}>End: {step.endTime ?? "—"}</div>
      {!!step.resources && (
        <>
          <div>Resources</div>
          <pre className={styles.code}>{JSON.stringify(step.resources, null, 2)}</pre>
        </>
      )}
      {!!step.artifacts?.length && (
        <>
          <div>Artifacts</div>
          <ul>{step.artifacts.map((a) => <li key={a}>{a}</li>)}</ul>
        </>
      )}
    </div>
  );
}