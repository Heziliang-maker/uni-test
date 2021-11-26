<!--
 * @Date: 2021-11-17
 * @Description: 使用props设置的最小长度
-->



<template>
  <div>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
    name: "DataToComponents",
    props: {
        minLength: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            password: 1
        };
    },
    computed: {
        error() {
            if (this.password.length < this.minLength) {
                return `Password must be at least ${this.minLength} characters`;
            }
            return null;
        }
    }
};
</script>
