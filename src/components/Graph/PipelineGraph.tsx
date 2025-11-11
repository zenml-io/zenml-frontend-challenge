import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
  MarkerType,
  ConnectionLineType
} from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "./nodeTypes";

type Props = {
  nodes: Node[];
  edges: Edge[];
  onSelectStep: (stepId: string | null) => void;
};

export function PipelineGraph({ nodes: initNodes, edges: initEdges, onSelectStep }: Props) {
  // Add arrow markers and styling to edges with subtle modern colors
  const styledEdges = initEdges.map(edge => ({
    ...edge,
    type: 'smoothstep',
    animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
      color: '#6b7280',
    },
    style: {
      stroke: '#6b7280',
      strokeWidth: 2,
    },
    pathOptions: {
      offset: 5
    }
  }));

  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(styledEdges);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, n) => onSelectStep(n.id)}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={{
          padding: 20,
          minZoom: 0.5,
          maxZoom: 1.5
        }}
      >
        <Controls />
        <MiniMap
          style={{
            height: 120,
            width: 200,
            background: '#1a1d23',
            border: '1px solid #374151',
            borderRadius: '8px'
          }}
          nodeColor={(node) => {
            const statusColors: Record<string, string> = {
              completed: '#22c55e',
              running: '#3b82f6',
              failed: '#ef4444',
              pending: '#9ca3af'
            };
            return statusColors[node.data?.status] || '#9ca3af';
          }}
        />
        <Background color="#e5e7eb" gap={25} size={1} />
      </ReactFlow>
    </div>
  );
}