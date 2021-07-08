import { defineComponent, ref, watch } from "vue";
import Hooktest from "./hooktest.vue";
import { Link } from "./Link";
import Loading from "./loading.vue";
import Programmaticnavigation from "./Programmaticnavigation.vue";
import { routes } from "./routes";
import { View } from "./View";
export default defineComponent({
    setup() {
        function refelement1(r: any) {
            console.log(r);
        }

        return { refelement1 };
    },
    components: { Hooktest, Loading, Link, Programmaticnavigation, View },
    data: () => {
        return { routes };
    },
});
