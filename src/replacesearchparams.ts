//@ts-ignore
import { getsearchparams } from "./getsearchparams.ts"; //@ts-ignore
import { setsearchparams } from "./setsearchparams.ts";
export function replacesearchparams(
    opt: (old: Record<string, string>) => Record<string, string>
) {
    setsearchparams(opt(getsearchparams()));
}
