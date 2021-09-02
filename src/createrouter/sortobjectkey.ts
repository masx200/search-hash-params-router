export function serilizesortobjectkey(o: Record<string, string>): string {
    return String(
        new URLSearchParams(
            Object.entries(o).sort(([key], [b]) => {
                return key > b ? 1 : -1;
            })
        )
    );
}
export { serilizesortobjectkey as serilizeparams };

export function deserilizeparams(a: string) {
    return Object.fromEntries(new URLSearchParams(a));
}
