<!--
 * @Date: 2021-11-17
 * @Description: 测试复杂的输入组件
-->


<template>
  <form>
    <el-input
      ref="description"
      v-model="description"
    />
    <button @click="handleClick">Send</button>
  </form>
</template>

<script>
export default {
    name: "CustomTextarea",
    data() {
        return {
            description: ""
        };
    },
    methods: {
        handleClick() {
            this.$emit("submit", this.description);
        }
    }
};
</script>