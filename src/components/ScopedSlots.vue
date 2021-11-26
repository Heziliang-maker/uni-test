<!--
 * @Date: 2021-11-18
 * @Description: 
-->
<template>
  <div class="scoped">
    <slot
      name="scoped"
      v-bind="{msg}"
    ></slot>
  </div>
</template>

<script>
export default {
    name: "ScopedSlots",
    data() {
        return {
            msg: "world"
        };
    }
};
</script>

<style lang="scss" scoped>
</style>