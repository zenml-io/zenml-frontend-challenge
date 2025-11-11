import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Box } from "@zenml-io/react-component-library";
export function LoadingError({ error, retry, retryCount = 0 }) {
    const isNetworkError = error.includes("unreachable") || error.includes("network");
    return (_jsxs("div", { style: {
            padding: 24,
            textAlign: "center",
            background: "var(--panel)",
            borderRadius: 8,
            margin: 16,
            border: "1px solid #ef4444"
        }, children: [_jsx("h3", { style: { color: "#ef4444", marginBottom: 16 }, children: isNetworkError ? "🌐 Connection Failed" : "⚠️ Error" }), _jsx("p", { style: { marginBottom: 16, color: "var(--text)" }, children: error }), isNetworkError && (_jsxs(Box, { style: {
                    background: "var(--panel)",
                    padding: 12,
                    borderRadius: 6,
                    marginBottom: 16,
                    fontSize: 14,
                    border: "1px solid var(--border)"
                }, children: [_jsx("strong", { children: "\uD83D\uDCA1 Try these solutions:" }), _jsxs("ul", { style: { textAlign: "left", marginTop: 8 }, children: [_jsx("li", { children: "Check your internet connection" }), _jsx("li", { children: "The API server might be temporarily down" }), _jsxs("li", { children: ["Run with mock data: ", _jsx("code", { children: "MSW=1 pnpm dev" })] })] })] })), _jsxs(Box, { style: { display: 'flex', gap: '8px', justifyContent: 'center' }, children: [_jsx(Button, { onClick: retry, intent: "primary", children: retryCount > 0 ? `Retry (${retryCount + 1})` : "Retry" }), isNetworkError && (_jsx(Button, { onClick: () => window.location.reload(), intent: "secondary", children: "Reload with MSW" }))] })] }));
}
