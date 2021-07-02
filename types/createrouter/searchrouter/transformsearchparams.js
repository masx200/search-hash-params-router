import { getsearchparams } from "./getsearchparams.ts";
import { setsearchparams } from "./setsearchparams.ts";
export function transformsearchparams(opt) {
    setsearchparams(opt(getsearchparams()));
}
