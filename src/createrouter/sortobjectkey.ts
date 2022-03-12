export function serilizesortobjectkey(o: Record<string, string>): string {
    return btoa(
        String(
            new URLSearchParams(
                Object.entries(o).sort(([key], [b]) => {
                    return key > b ? 1 : -1;
                    //@ts-ignore
                })
            )
        )
    );
}
const serializeParams = serilizesortobjectkey;
export { serializeParams };
