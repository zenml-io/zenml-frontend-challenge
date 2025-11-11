import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Handle, Position } from "reactflow";
import { Badge, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@zenml-io/react-component-library";
const statusColor = {
    completed: "#22c55e",
    running: "#3b82f6",
    failed: "#ef4444",
    pending: "#9ca3af"
};
const badgeColor = {
    completed: "green",
    running: "blue",
    failed: "red",
    pending: "grey"
};
export function ZenNode({ data }) {
    const color = statusColor[data.status] ?? "#94a3b8";
    const tooltipContent = (_jsxs("div", { children: [_jsx("div", { children: _jsx("strong", { children: data.label }) }), _jsxs("div", { children: ["Status: ", data.status] }), typeof data.runtime === "number" && _jsxs("div", { children: ["Runtime: ", data.runtime, "s"] }), _jsx("div", { style: { marginTop: 8, fontSize: 12, opacity: 0.8 }, children: "Click to view details" })] }));
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsxs("div", { style: {
                            border: `2px solid ${color}`,
                            borderRadius: 12,
                            padding: 16,
                            background: "linear-gradient(135deg, #1a1d23 0%, #0f1419 100%)",
                            minWidth: 180,
                            position: "relative",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                            cursor: "pointer"
                        }, children: [_jsx(Handle, { type: "target", position: Position.Top, style: {
                                    background: color,
                                    border: "2px solid #0f1733",
                                    width: 12,
                                    height: 12,
                                } }), _jsx("div", { style: { fontWeight: 600, marginBottom: 8, color: "#f9fafb" }, children: data.label }), _jsx("div", { style: { marginBottom: 8 }, children: _jsx(Badge, { color: badgeColor[data.status] ?? "grey", children: data.status }) }), typeof data.runtime === "number" && (_jsxs("div", { style: { fontSize: 12, opacity: 0.8, color: "#d1d5db" }, children: ["Runtime: ", data.runtime, "s"] })), _jsx(Handle, { type: "source", position: Position.Bottom, style: {
                                    background: color,
                                    border: "2px solid #0f1733",
                                    width: 12,
                                    height: 12,
                                } })] }) }), _jsx(TooltipContent, { children: tooltipContent })] }) }));
}
export const nodeTypes = { zenNode: ZenNode };
