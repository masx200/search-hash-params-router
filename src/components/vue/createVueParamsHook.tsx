import { ref as refType } from "@vue/runtime-dom";
import debounce from "lodash/debounce";
import { Router } from "../../createrouter/Router";

export function createVueParamsHook({
    router,
    ref,
    onMounted,
    onUnmounted,
    readonly,
}: {
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    router: Router;
    ref: typeof refType;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
}): () => {
    readonly value: {
        readonly [x: string]: string;
    };
} {
    return function () {
        const params = ref(router.getparams());
        const paramschange = debounce((p) => {
            params.value = p;
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
        onMounted(onmount);
        onUnmounted(onunmount);
        return readonly(params);
    };
}
