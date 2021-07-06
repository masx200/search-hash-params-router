import { defineComponent } from "vue";
import { Link } from "./Link";
import Loading from "./loading.vue";
import Programmaticnavigation from "./Programmaticnavigation.vue";
import { routes } from "./routes";
import { View } from "./View";
export default defineComponent({
    components: { Loading, Link, Programmaticnavigation, View },
    data: () => {
        return { routes };
    },
});
