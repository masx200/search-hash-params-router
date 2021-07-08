<template>
    <div>params:{{ JSON.stringify(params) }}</div>
</template>
<script lang="ts">
import {
    defineComponent,
    ref,
    readonly,
    onMounted,
    onUnmounted,
    watch,
} from "vue";
import { createVueParamsHook } from "../../../../dist";
import { hashrouter } from "./hashrouter";
const useParams = createVueParamsHook({
    router: hashrouter,
    ref,
    readonly,
    onMounted,
    onUnmounted,
});
export default defineComponent({
    setup() {
        const params = useParams();
        watch(
            () => params.value,
            (params) => {
                console.log(params);
            }
        );
        return { params };
    },
});
</script>
