import { deserializeParams } from "../deserializeParams";

export function gethashparams() {
    return (location.hash && deserializeParams(location.hash.slice(1))) || {};
}
