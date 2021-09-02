export function serilizesortobjectkey(o: Record<string, string>): string {
    return String(
        new URLSearchParams(
            Object.entries(o).sort(([key], [b]) => {
                return key > b ? 1 : -1;
            })
        )
    );
}
const serilizeparams = serilizesortobjectkey;
export { serilizeparams };

export function deserilizeparams(a: string) {
    return Object.fromEntries(new URLSearchParams(a));
}
