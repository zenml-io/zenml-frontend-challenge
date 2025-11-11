import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { usePipelineData } from "../hooks/usePipelineData";
import { PipelineGraph } from "../components/Graph/PipelineGraph";
import { DetailsPanel } from "../components/DetailsPanel/DetailsPanel";
import { LoadingError } from "../components/LoadingError/LoadingError";
import styles from "./App.module.css";
export default function App() {
    const { exec, rf, loading, error, retry, retryCount } = usePipelineData();
    const [selected, setSelected] = useState(null);
    if (loading) {
        return (_jsxs("div", { style: {
                padding: 24,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }, children: [_jsx("div", { style: { fontSize: 18, marginBottom: 8 }, children: "\u23F3 Loading AI Pipeline..." }), _jsx("div", { style: { fontSize: 14, color: "var(--muted)" }, children: "Fetching latest execution from API" })] }));
    }
    if (error) {
        return _jsx(LoadingError, { error: error, retry: retry, retryCount: retryCount });
    }
    if (!exec) {
        return (_jsxs("div", { style: { padding: 24, textAlign: "center" }, children: [_jsx("div", { style: { fontSize: 18, marginBottom: 8 }, children: "\uD83D\uDCED No Pipeline Data" }), _jsx("div", { style: { fontSize: 14, color: "var(--muted)" }, children: "No pipeline executions found in the API" })] }));
    }
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.graph, children: [_jsxs("div", { className: styles.header, children: [_jsx("div", { children: exec.name }), _jsxs("div", { className: styles.toolbar, children: [_jsxs("small", { children: ["Execution: ", exec.id] }), _jsxs("small", { style: { marginLeft: 12, color: "var(--muted)" }, children: ["Status: ", exec.status] })] })] }), _jsx("div", { style: { height: "calc(100% - 41px)" }, children: _jsx(PipelineGraph, { nodes: rf.nodes, edges: rf.edges, onSelectStep: (id) => setSelected(exec.steps.find((s) => s.id === id) ?? null) }) })] }), _jsx("div", { className: styles.sidebar, children: _jsx(DetailsPanel, { step: selected }) })] }));
}
