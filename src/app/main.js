import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../styles/globals.css";
async function startApp() {
    // MSW toggle
    if (import.meta.env.VITE_MSW === "1" || (typeof process !== "undefined" && (process.env.MSW === "1"))) {
        const { startMockServer } = await import("../mocks/server");
        await startMockServer();
    }
    const root = createRoot(document.getElementById("root"));
    root.render(_jsx(App, {}));
}
startApp();
