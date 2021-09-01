export function serilizesortobjectkey(o: Record<string, string>): string {
    return String(
        new URLSearchParams(
            Object.entries(o).sort(([key], [b]) => {
                return key > b ? 1 : -1;
            })
        )
    );
}
