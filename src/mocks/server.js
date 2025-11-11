export async function startMockServer() {
    if (typeof window !== "undefined") {
        // Browser environment
        const { startBrowserMocks } = await import("./browser");
        await startBrowserMocks();
    }
}
