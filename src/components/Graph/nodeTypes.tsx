import React from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import { Badge, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@zenml-io/react-component-library";

// Step type colors inspired by ZenML Pro
const stepTypeColors: Record<string, string> = {
  "Data Loading": "#8b5cf6", // purple
  "Data Preprocessing": "#06b6d4", // cyan
  "Model Training": "#10b981", // green
  "Evaluation": "#f59e0b", // amber
  "Model Deployment": "#ef4444" // red
};

const statusConfig = {
  completed: {
    borderColor: "#e5e7eb",
    bgColor: "#ffffff",
    badgeColor: "green" as const,
    textColor: "#1f2937",
    statusIndicator: "#10b981"
  },
  running: {
    borderColor: "#e5e7eb",
    bgColor: "#ffffff",
    badgeColor: "blue" as const,
    textColor: "#1f2937",
    statusIndicator: "#3b82f6"
  },
  failed: {
    borderColor: "#e5e7eb",
    bgColor: "#ffffff",
    badgeColor: "red" as const,
    textColor: "#1f2937",
    statusIndicator: "#ef4444"
  },
  pending: {
    borderColor: "#e5e7eb",
    bgColor: "#ffffff",
    badgeColor: "grey" as const,
    textColor: "#9ca3af",
    statusIndicator: "#9ca3af"
  }
};

export function ZenNode({ data }: NodeProps) {
  const config = statusConfig[data.status] ?? statusConfig.pending;
  const stepTypeColor = stepTypeColors[data.label] ?? "#8b5cf6";

  const tooltipContent = (
    <div>
      <div><strong>{data.label}</strong></div>
      <div>Status: {data.status}</div>
      {typeof data.runtime === "number" && <div>Runtime: {data.runtime}s</div>}
      <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>Click to view details</div>
    </div>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div style={{
            border: `1px solid ${config.borderColor}`,
            borderRadius: 8,
            padding: 0,
            background: config.bgColor,
            width: 140,
            height: 40,
            position: "relative",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            fontFamily: "'Inter', system-ui, sans-serif"
          }}>
      {/* Input handle at the top */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: config.borderColor,
          border: `2px solid ${config.bgColor}`,
          width: 12,
          height: 12,
        }}
      />

      {/* Step type icon/badge */}
      <div style={{
        padding: "8px 12px",
        borderBottom: "1px solid #f3f4f6",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <div style={{
          width: "20px",
          height: "20px",
          borderRadius: "4px",
          backgroundColor: stepTypeColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: "600",
          color: "white"
        }}>
          {data.label.charAt(0)}
        </div>
        <div style={{
          fontSize: "13px",
          fontWeight: "500",
          color: config.textColor,
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}>
          {data.label}
        </div>
        {config.statusIndicator && (
          <div style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: config.statusIndicator
          }} />
        )}
      </div>

      {/* Runtime below node */}
      {typeof data.runtime === "number" && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "4px",
          fontSize: "11px",
          fontWeight: "500",
          color: "#6b7280",
          backgroundColor: "#f9fafb",
          padding: "2px 6px",
          borderRadius: "4px",
          border: "1px solid #e5e7eb"
        }}>
          {data.runtime}s
        </div>
      )}

      {/* Output handle at the bottom */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: config.borderColor,
          border: `2px solid ${config.bgColor}`,
          width: 12,
          height: 12,
        }}
      />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export const nodeTypes = { zenNode: ZenNode };