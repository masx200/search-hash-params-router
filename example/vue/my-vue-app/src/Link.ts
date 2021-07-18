import {
    defineComponent,
    h,
    resolveComponent,
    onMounted,
    onUnmounted,
    readonly,
    ref,
} from "vue";
import { createVueLink } from "../../../../dist/index";
import { hashrouter } from "./hashrouter";
const Link = createVueLink({
    router: hashrouter,
    ref,
    onMounted,
    onUnmounted,
    readonly,
    resolveComponent,
    defineComponent,
    h,
});
export { Link };
