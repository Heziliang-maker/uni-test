<!--
 * @Date: 2021-11-17
 * @Description: 使用setProps
-->



<template>
  <div v-if="show">{{ greeting }}</div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            greeting: "Hello"
        };
    }
};
</script>