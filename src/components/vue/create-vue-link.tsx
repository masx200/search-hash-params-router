import { Router } from "../../createrouter/Router";
import {
    defineComponent as defineComponentType,
    h as hType,
} from "@vue/runtime-dom";
export { createVueLink };
function createVueLink({
    router,
    defineComponent,
    h: createElement,
}: {
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
}) {
    console.log(router, defineComponent, createElement);
    return defineComponent({
        setup(props, { slots }) {
            return;
        },
    });
}
