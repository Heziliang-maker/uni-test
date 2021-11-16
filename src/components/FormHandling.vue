<!--
 * @Date: 2021-11-16
 * @Description: 
-->
<template>
  <div>
    <input
      type="email"
      v-model="email"
    >
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
    name: "FormHandling",
    data() {
        return {
            email: ""
        };
    },
    methods: {
        submit() {
            this.$emit("submit", this.email);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>