import { isrouterecord } from "../isrouterecord";
import { matchroute } from "../../createrouter/matchroute";

import { navigate } from "../navigate";
import debounce from "lodash/debounce";
export { createReactView };
function createReactView({
    router,
    useCallback,
    createElement,
    useState,
    useEffect,
}) {
    return ({ routes }) => {
        console.log(
            router,

            createElement,
            useState,
            useEffect
        );
        if (!Array.isArray(routes)) {
            throw new TypeError("array");
        }
        if (
            !routes.every((o) => {
                return isrouterecord(o);
            })
        ) {
            throw new TypeError("object");
        }
        const [params, setparams] = useState(router.getparams());
        const [currentroute, setcurrentroute] = useState(
            matchroute(routes, params)
        );

        const paramschange = useCallback(
            debounce((p) => {
                setparams(p);
            }),
            []
        );
        useEffect(() => {
            setcurrentroute(matchroute(routes, params));
        }, [routes, params]);

        useEffect(() => {
            if (currentroute?.redirect) {
                const redirect = currentroute.redirect;

                navigate(router, redirect);
            }
        }, [currentroute?.redirect]);
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

        if (currentroute?.redirect) {
            return;
        }
        if (currentroute?.component) {
            const Component = currentroute.component;

            const children = currentroute.children;

            const props = currentroute.props || {};
            Object.assign(props, { params });
            return <Component {...props}> {children}</Component>;
        } else {
            return;
        }
    };
}
