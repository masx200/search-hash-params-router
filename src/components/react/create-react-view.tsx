import debounce from "lodash/debounce";
import { matchRoute } from "../../createrouter/matchRoute";
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
export { createReactView };
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
        const [params, setparams] = useState<Record<string, string>>(
            router.getparams()
        );
        // const [currentroute, setcurrentroute] = useState(
        //     matchRoute(routes, params)
        // );

        // useEffect(() => {
        //     setcurrentroute(matchRoute(routes, params));
        // }, [routes, params]);

        // useEffect(() => {
        //     if (isRecordRedirect(currentroute)) {
        //         const redirect = currentroute.redirect;

        //         navigate(router, redirect);
        //     }
        // }, [currentroute]);

        useEffect(() => {
            const paramschange = debounce((p) => {
                setparams(p);
            });
            function onmount() {
                router.mount();
                router.on("params", paramschange);
            }

            function onunmount() {
                router.unmount();

                router.off("params", paramschange);
                paramschange.cancel();
            }
            onmount();

            return onunmount;
        }, []);
        const currentroute = matchRoute(routes, params);
        if (isRecordRedirect(currentroute)) {
            const redirect = currentroute.redirect;

            navigate(router, redirect);
        }
        if (isRecordRedirect(currentroute)) {
            return null;
        }
        if (isRecordRoute(currentroute)) {
            const Component = currentroute.component as ComponentType<any>;

            const children = currentroute.children;

            const props = currentroute.props || {};
            let oprops = Object.assign({}, props, { params });
            //@ts-ignore
            return createElement(Component, { ...oprops }, children);
        } else {
            return null;
        }
    };
}
