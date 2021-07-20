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
    PropsWithChildren,
} from "react";
import { RouteRecord } from "../../createrouter";
import { isRecordRedirect } from "../../createrouter/isRecordRedirect";
import { isRecordRoute } from "../../createrouter/isRecordRoute";
import { createReactParamsHook } from "./createReactParamsHook";
export { createReactView, createReactParamsHook };
export type CustomReactViewProps = {
    component: ComponentType<any>;
    params: Record<string, string>;
};

export type DefaultReactViewProps = {
    routes: RouteRecord[];
    render?: ComponentType<CustomReactViewProps>;
};

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
}): FC<DefaultReactViewProps> {
    const useParams = createReactParamsHook({
        router,
        useState,
        useEffect,
    });
    function viewrenderdefault({
        component,
        params,
    }: PropsWithChildren<CustomReactViewProps>) {
        //@ts-ignore
        return createElement(component, { params });
    }
    return ({ routes, render = viewrenderdefault }) => {
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

            return null;
        }
        if (isRecordRoute(currentroute)) {
            const Component = currentroute.component as ComponentType<any>;

            const props = { component: Component };
            let oprops = Object.assign({}, props, { params });
            //@ts-ignore
            return createElement(render, { ...oprops });
        } else {
            return null;
        }
    };
}
