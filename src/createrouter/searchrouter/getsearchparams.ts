import { deserializeParams } from "../deserializeParams";

export function getsearchparams() {
    return (
        (location.search && deserializeParams(location.search.slice(1))) || {}
    );
}
