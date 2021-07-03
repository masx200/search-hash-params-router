//@ts-ignore
import { createBaseRouter } from "../createbaserouter.ts";
import { Router } from "../Router";
import { RouteRecord } from "../RouteRecord";
export function createHashRouter({
    routes = [],
}: {
    routes?: RouteRecord[];
} = {}): Router {
    return createBaseRouter({ routes, type: "hash" });
}
