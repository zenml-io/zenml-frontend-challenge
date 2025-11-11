import React from "react";
import { Button, Box } from "@zenml-io/react-component-library";

type Props = {
  error: string;
  retry: () => void;
  retryCount?: number;
};

export function LoadingError({ error, retry, retryCount = 0 }: Props) {
  const isNetworkError = error.includes("unreachable") || error.includes("network");

  return (
    <div style={{
      padding: 24,
      textAlign: "center",
      background: "var(--panel)",
      borderRadius: 8,
      margin: 16,
      border: "1px solid #ef4444"
    }}>
      <h3 style={{ color: "#ef4444", marginBottom: 16 }}>
        {isNetworkError ? "🌐 Connection Failed" : "⚠️ Error"}
      </h3>

      <p style={{ marginBottom: 16, color: "var(--text)" }}>
        {error}
      </p>

      {isNetworkError && (
        <Box style={{
          background: "var(--panel)",
          padding: 12,
          borderRadius: 6,
          marginBottom: 16,
          fontSize: 14,
          border: "1px solid var(--border)"
        }}>
          <strong>💡 Try these solutions:</strong>
          <ul style={{ textAlign: "left", marginTop: 8 }}>
            <li>Check your internet connection</li>
            <li>The API server might be temporarily down</li>
            <li>Run with mock data: <code>MSW=1 pnpm dev</code></li>
          </ul>
        </Box>
      )}

      <Box style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <Button
          onClick={retry}
          intent="primary"
        >
          {retryCount > 0 ? `Retry (${retryCount + 1})` : "Retry"}
        </Button>

        {isNetworkError && (
          <Button
            onClick={() => window.location.reload()}
            intent="secondary"
          >
            Reload with MSW
          </Button>
        )}
      </Box>
    </div>
  );
}