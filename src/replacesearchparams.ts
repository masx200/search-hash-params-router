import { getsearchparams } from "./getsearchparams.ts";
import { setsearchparams } from "./setsearchparams.ts";
export function replacesearchparams(opt) {
    setsearchparams(opt(getsearchparams()));
}
