//@ts-ignore
import { gethashparams } from "./gethashparams.ts"; //@ts-ignore
import { sethashparams } from "./sethashparams.ts";
export function replacehashparams(opt) {
    sethashparams(opt(gethashparams()));
}
