import { gethashparams } from "./gethashparams";
import { sethashparams } from "./sethashparams";
export function replacehashparams(opt) {
    sethashparams(opt(gethashparams()));
}
