import {readonly,
    // Fragment,
    defineComponent,
    h,
    onMounted,
    onUnmounted,
    ref,
    resolveComponent,
    // watch,
} from "vue";
import { createVueView } from "../../../../dist/index";
import { hashrouter } from "./hashrouter";
const View = createVueView({readonly,
    // Fragment,
    onMounted,
    onUnmounted,
    router: hashrouter,
    resolveComponent,
    defineComponent,
    h,
    ref,
    // watch,
});
export { View };
