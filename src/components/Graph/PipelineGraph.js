import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactFlow, { Background, Controls, MiniMap, useEdgesState, useNodesState, MarkerType, ConnectionLineType } from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "./nodeTypes";
export function PipelineGraph({ nodes: initNodes, edges: initEdges, onSelectStep }) {
    // Add arrow markers and styling to edges with ZenML colors
    const styledEdges = initEdges.map(edge => ({
        ...edge,
        type: 'smoothstep',
        animated: true,
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: '#0ea5e9',
        },
        style: {
            stroke: '#0ea5e9',
            strokeWidth: 2,
        },
        pathOptions: {
            offset: 5
        }
    }));
    const [nodes, , onNodesChange] = useNodesState(initNodes);
    const [edges, , onEdgesChange] = useEdgesState(styledEdges);
    return (_jsx("div", { style: { width: "100%", height: "100%" }, children: _jsxs(ReactFlow, { nodes: nodes, edges: edges, nodeTypes: nodeTypes, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onNodeClick: (_, n) => onSelectStep(n.id), connectionLineType: ConnectionLineType.SmoothStep, fitView: true, fitViewOptions: {
                padding: 20,
                minZoom: 0.5,
                maxZoom: 1.5
            }, children: [_jsx(Controls, {}), _jsx(MiniMap, { style: {
                        height: 120,
                        width: 200,
                        background: '#1a1d23',
                        border: '1px solid #374151',
                        borderRadius: '8px'
                    }, nodeColor: (node) => {
                        const statusColors = {
                            completed: '#22c55e',
                            running: '#3b82f6',
                            failed: '#ef4444',
                            pending: '#9ca3af'
                        };
                        return statusColors[node.data?.status] || '#9ca3af';
                    } }), _jsx(Background, { color: "#374151", gap: 20 })] }) }));
}
