import { RecordRoute } from "./RouteRecord";

export function isRecordRoute(o: any): o is RecordRoute {
    return "function" === typeof o?.params && o?.component;
}
