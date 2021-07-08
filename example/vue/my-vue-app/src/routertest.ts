import { defineComponent, defineAsyncComponent } from "vue";
import { Link } from "./Link";
import Loading from "./loading.vue";
import Programmaticnavigation from "./Programmaticnavigation.vue";
import { routes } from "./routes";
import { View } from "./View";
import Hooktest from "./hooktest.vue";
export default defineComponent({
    components: { Hooktest, Loading, Link, Programmaticnavigation, View },
    data: () => {
        return { routes };
    },
});
