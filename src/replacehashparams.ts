import { gethashparams } from "./gethashparams.ts";
import { sethashparams } from "./sethashparams.ts";
export function replacehashparams(opt) {
    sethashparams(opt(gethashparams()));
}
