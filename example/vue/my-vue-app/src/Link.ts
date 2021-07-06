import { defineComponent, h, resolveComponent, Fragment } from "vue";
import { createVueLink } from "../../../../dist/index";
import { hashrouter } from "./hashrouter";
const Link = createVueLink({
    router: hashrouter,
    Fragment,
    resolveComponent,
    defineComponent,
    h,
});
export { Link };
