//@ts-ignore
import { gethashparams } from "./gethashparams.ts"; //@ts-ignore
import { sethashparams } from "./sethashparams.ts";
export function transformhashparams(
    opt: (old: Record<string, string>) => Record<string, string>
) {
    sethashparams(opt(gethashparams()));
}
