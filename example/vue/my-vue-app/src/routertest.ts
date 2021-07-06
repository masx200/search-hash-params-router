import { defineComponent } from "vue";
import { Link } from "./Link";
import Loading from "./loading.vue";
import Programmaticnavigation from "./Programmaticnavigation.vue";
export default defineComponent({
    components: { Loading, Link, Programmaticnavigation },
    data: () => {
        return { routes: [] };
    },
});
