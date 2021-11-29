<!--
 * @Date: 2021-11-29
 * @Description: 
-->
<template>
  <div>
    <button @click="increment">increment</button>
    Count:{{count}}
  </div>
</template>

<script>
import { INCREMENT } from "@/store/mutations";
export default {
    name: "TestVuex",
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment() {
            this.$store.commit(INCREMENT);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>