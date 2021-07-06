import { defineComponent } from "vue";
import { hashrouter } from "./hashrouter";
function onclick() {
    hashrouter.setparams({ qqqqq: Math.random().toString() });
}
export default defineComponent({
    data: () => {
        return { onclick };
    },
});
