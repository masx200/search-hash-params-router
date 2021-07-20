import { defineComponent, reactive, watch } from "vue";
import Hooktest from "./hooktest.vue";
import { Link } from "./Link";
import Loading from "./loading.vue";
import Programmaticnavigation from "./Programmaticnavigation.vue";
import { routes } from "./routes";
import { View } from "./View";
export default defineComponent({
    mounted() {
        console.log(this);
    },
    setup() {
        function refelement1(r: any) {
            console.log(r);
        }
        const refele2 = reactive({ value: undefined });
        watch(
            () => refele2.value,
            (e) => {
                console.log(e);
            }
        );
        return { refelement1, refele2 };
    },
    components: { Hooktest, Loading, Link, Programmaticnavigation, View },
    data: () => {
        return { routes };
    },
});
