//@ts-ignore
import { gethashparams } from "./gethashparams.ts"; //@ts-ignore
import { sethashparams } from "./sethashparams.ts";
export function replacehashparams(
    opt: (old: Record<string, string>) => Record<string, string>
) {
    sethashparams(opt(gethashparams()));
}
