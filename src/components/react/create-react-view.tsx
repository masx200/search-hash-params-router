import debounce from "lodash/debounce";
import { matchRoute } from "../../createrouter/matchRoute";
import { Router } from "../../createrouter/Router";
import { isrouterecord } from "../isrouterecord";
import { navigate } from "../navigate";
import type {
    FC,
    useCallback as useCallbackType,
    createElement as createElementType,
    useState as useStateType,
    useEffect as useEffectType,
    ComponentType,
} from "react";
import { RouteRecord } from "../../createrouter";
import { isRecordRedirect } from "../../createrouter/isRecordRedirect";
import { isRecordRoute } from "../../createrouter/isRecordRoute";
export { createReactView };
function createReactView({
    router,
    useCallback,
    createElement,
    useState,
    useEffect,
}: {
    router: Router;
    useCallback: typeof useCallbackType;
    createElement: typeof createElementType;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}): FC<{ routes: RouteRecord[] }> {
    return ({ routes }) => {
        console.log(router, useCallback, createElement, useState, useEffect);
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
        const [params, setparams] = useState<Record<string, string>>(
            router.getparams()
        );
        const [currentroute, setcurrentroute] = useState(
            matchRoute(routes, params)
        );

        const paramschange = useCallback(
            debounce((p) => {
                setparams(p);
            }),
            []
        );
        useEffect(() => {
            setcurrentroute(matchRoute(routes, params));
        }, [routes, params]);

        useEffect(() => {
            if (isRecordRedirect(currentroute)) {
                const redirect = currentroute.redirect;

                navigate(router, redirect);
            }
        }, [currentroute]);
        function onmount() {
            router.mount();
            router.on("params", paramschange);
        }

        function onunmount() {
            router.unmount();

            router.off("params", paramschange);
        }
        useEffect(() => {
            onmount();

            return onunmount;
        }, []);

        if (isRecordRedirect(currentroute)) {
            return null;
        }
        if (isRecordRoute(currentroute)) {
            const Component = currentroute.component as ComponentType<any>;

            const children = currentroute.children;

            const props = currentroute.props || {};
            Object.assign(props, { params });
            //@ts-ignore
            return <Component {...props}>{children}</Component>;
        } else {
            return null;
        }
    };
}
