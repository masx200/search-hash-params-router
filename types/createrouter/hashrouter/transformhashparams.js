import { gethashparams } from "./gethashparams.ts";
import { sethashparams } from "./sethashparams.ts";
export function transformhashparams(opt) {
    sethashparams(opt(gethashparams()));
}
