export function gethashparams() {
    return (
        location.hash &&
        Object.fromEntries(new URLSearchParams(location.hash.slice(1)))
    );
}
