import { RouteRecord } from "./RouteRecord";

export function matchRoute(
    routes: RouteRecord[],
    params: Record<string, string>
) {
    for (let route of routes) {
        if (route.params(params)) {
            return route;
        }
    }
    return undefined;
}
