//@ts-ignore

import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
import { RouteRecord } from "../RouteRecord";

export function createSearchRouter({
    routes = [],
}: {
    routes?: RouteRecord[];
} = {}): Router {
    return createBaseRouter(routes, "search");
}
