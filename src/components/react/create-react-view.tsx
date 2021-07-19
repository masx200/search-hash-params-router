import { matchRoute } from "../../createrouter/matchroute";
import { Router } from "../../createrouter/Router";
import { isrouterecord } from "../isrouterecord";
import { navigate } from "../navigate";
import type {
    FC,
    createElement as createElementType,
    useState as useStateType,
    useEffect as useEffectType,
    ComponentType,
} from "react";
import { RouteRecord } from "../../createrouter";
import { isRecordRedirect } from "../../createrouter/isRecordRedirect";
import { isRecordRoute } from "../../createrouter/isRecordRoute";
import { createReactParamsHook } from "./createReactParamsHook";
export { createReactView, createReactParamsHook };
function createReactView({
    router,

    createElement,
    useState,
    useEffect,
}: {
    router: Router;

    createElement: typeof createElementType;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}): FC<{ routes: RouteRecord[] }> {
    const useParams = createReactParamsHook({
        router,
        useState,
        useEffect,
    });
    return ({ routes }) => {
        if (!Array.isArray(routes)) {
            throw new TypeError("array");
        }
        if (
            !routes.every((o) => {
                return isrouterecord(o);
            })
        ) {
            throw new TypeError('{params:"function"}');
        }

        const params = useParams();
        const currentroute = matchRoute(routes, params);
        if (isRecordRedirect(currentroute)) {
            const redirect = currentroute.redirect;

            navigate(router, redirect);
            // }
            // if (isRecordRedirect(currentroute)) {
            return null;
        }
        if (isRecordRoute(currentroute)) {
            const Component = currentroute.component as ComponentType<any>;

            const props = {};
            let oprops = Object.assign({}, props, { params });
            //@ts-ignore
            return createElement(Component, { ...oprops });
        } else {
            return null;
        }
    };
}
