import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./DetailsPanel.module.css";
import { Badge, Box } from "@zenml-io/react-component-library";
const badgeColor = {
    completed: "green",
    running: "blue",
    failed: "red",
    pending: "grey"
};
export function DetailsPanel({ step }) {
    if (!step)
        return _jsx("div", { className: styles.panel, children: "Select a step to view details" });
    return (_jsxs("div", { className: styles.panel, children: [_jsx("h3", { style: { marginBottom: '16px', color: 'var(--text)' }, children: step.name }), _jsx(Box, { style: { marginBottom: '12px' }, children: _jsx(Badge, { color: badgeColor[step.status] ?? "grey", children: step.status }) }), _jsxs("div", { style: { marginBottom: '8px' }, children: ["Runtime: ", step.runtime ?? "—", "s"] }), _jsxs("div", { style: { marginBottom: '8px' }, children: ["Start: ", step.startTime ?? "—"] }), _jsxs("div", { style: { marginBottom: '16px' }, children: ["End: ", step.endTime ?? "—"] }), !!step.resources && (_jsxs(_Fragment, { children: [_jsx("div", { children: "Resources" }), _jsx("pre", { className: styles.code, children: JSON.stringify(step.resources, null, 2) })] })), !!step.artifacts?.length && (_jsxs(_Fragment, { children: [_jsx("div", { children: "Artifacts" }), _jsx("ul", { children: step.artifacts.map((a) => _jsx("li", { children: a }, a)) })] }))] }));
}
