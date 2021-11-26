<!--
 * @Date: 2021-11-18
 * @Description: 
-->

<template>
  <div>
    <h1>Welcome!</h1>
    <main>
      <slot />
    </main>
    <footer>
      Thanks for visiting.
    </footer>
  </div>
</template>

<script>
export default {
    name: "Slots"
};
</script>

<style lang="scss" scoped>
</style>