import debounce from "lodash/debounce";
import { Router } from "../../createrouter/Router";
import { useState as useStateType, useEffect as useEffectType } from "react";

export function createReactParamsHook({
    router,
    useState,
    useEffect,
}: {
    router: Router;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}) {
    return function () {
        const [params, setparams] = useState<Record<string, string>>(
            router.getparams()
        );
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
        return params;
    };
}
