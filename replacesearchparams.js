import { getsearchparams } from "./getsearchparams";
import { setsearchparams } from "./setsearchparams";
export function replacesearchparams(opt) {
    setsearchparams(opt(getsearchparams()));
}
