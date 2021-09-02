import debounce from "lodash/debounce.js";
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
}): () => Readonly<Record<string, string>> {
    return function (): Readonly<Record<string, string>> {
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
        return params as Readonly<Record<string, string>>;
    };
}
