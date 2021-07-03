//@ts-ignore

import { createBaseRouter } from "../createbaserouter.ts";
import { Router } from "../Router";
import { RouteRecord } from "../RouteRecord";

export function createSearchRouter({
    routes = [],
}: {
    routes?: RouteRecord[];
} = {}): Router {
    return createBaseRouter({ routes, type: "search" });
}
