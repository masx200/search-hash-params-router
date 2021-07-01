export function getsearchparams() {
    return (
        (location.search &&
            Object.fromEntries(new URL(location.href).searchParams)) ||
        {}
    );
}
