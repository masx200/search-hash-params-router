import { defineComponent, h, resolveComponent } from "vue";
import { createVueLink } from "../../../../dist/index";
import { hashrouter } from "./hashrouter";
const Link = createVueLink({
    router: hashrouter,

    resolveComponent,
    defineComponent,
    h,
});
export { Link };
