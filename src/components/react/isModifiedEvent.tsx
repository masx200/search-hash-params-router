export function isModifiedEvent(
    event: MouseEvent | import("react").MouseEvent
) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
