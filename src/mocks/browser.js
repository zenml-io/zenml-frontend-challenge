import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
export async function startBrowserMocks() {
    const worker = setupWorker(...handlers);
    await worker.start({ onUnhandledRequest: "bypass" });
}
