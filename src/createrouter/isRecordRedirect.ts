import { RecordRedirect } from "./RouteRecord";

export function isRecordRedirect(o: any): o is RecordRedirect {
    return !!("function" === typeof o?.params && o?.redirect);
}
