import { Router } from "../../createrouter/Router";
import { defineComponent as defineComponentType } from "@vue/runtime-dom";
export { createVueLink };
function createVueLink({
    router,
    defineComponent,
}: {
    router: Router;
    defineComponent: typeof defineComponentType;
}) {
    return defineComponent({
        setup(props, { slots }) {
            return;
        },
    });
}
