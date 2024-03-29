export function deserializeParams(a: string) {
    try {
        return Object.fromEntries(Array.from(new URLSearchParams(atob(a))));
    } catch (error) {
        return {};
    }
}
