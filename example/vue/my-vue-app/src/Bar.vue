<template>
    <div>
        <h1>bar</h1>
        <div>{{ msg }}</div>
        <div>{{ JSON.stringify(params) }}</div>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: ["msg", "params"],
});
</script>
