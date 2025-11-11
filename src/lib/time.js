export function formatSeconds(s) {
    if (s == null)
        return "—";
    if (s < 60)
        return `${s}s`;
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}m ${r}s`;
}
