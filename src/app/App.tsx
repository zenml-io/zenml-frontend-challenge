import React, { useState } from "react";
import { usePipelineData } from "../hooks/usePipelineData";
import { PipelineGraph } from "../components/Graph/PipelineGraph";
import { DetailsPanel } from "../components/DetailsPanel/DetailsPanel";
import { LoadingError } from "../components/LoadingError/LoadingError";
import type { Step } from "../api/schema";
import styles from "./App.module.css";

export default function App() {
  const { exec, rf, loading, error, retry, retryCount } = usePipelineData();
  const [selected, setSelected] = useState<Step | null>(null);

  if (loading) {
    return (
      <div style={{
        padding: 24,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        <div style={{ fontSize: 18, marginBottom: 8 }}>⏳ Loading AI Pipeline...</div>
        <div style={{ fontSize: 14, color: "var(--muted)" }}>
          Fetching latest execution from API
        </div>
      </div>
    );
  }

  if (error) {
    return <LoadingError error={error} retry={retry} retryCount={retryCount} />;
  }

  if (!exec) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <div style={{ fontSize: 18, marginBottom: 8 }}>📭 No Pipeline Data</div>
        <div style={{ fontSize: 14, color: "var(--muted)" }}>
          No pipeline executions found in the API
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.graph}>
        <div className={styles.header}>
          <div>{exec.name}</div>
          <div className={styles.toolbar}>
            <small>Execution: {exec.id}</small>
            <small style={{ marginLeft: 12, color: "var(--muted)" }}>
              Status: {exec.status}
            </small>
          </div>
        </div>
        <div style={{ height: "calc(100% - 41px)" }}>
          <PipelineGraph
            nodes={rf.nodes}
            edges={rf.edges}
            onSelectStep={(id) => setSelected(exec.steps.find((s) => s.id === id) ?? null)}
          />
        </div>
      </div>
      <div className={styles.sidebar}>
        <DetailsPanel step={selected} />
      </div>
    </div>
  );
}