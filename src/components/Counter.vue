<!--
 * @Date: 2021-11-15
 * @Description: Counter 
-->


<template>
  <div>
    <button @click="handleClick">Increment</button>
  </div>
</template>

<script>
export default {
    name: "Counter",
    data() {
        return {
            count: 0
        };
    },
    methods: {
        handleClick() {
            this.count += 1;
            this.$emit("increment", this.count);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>