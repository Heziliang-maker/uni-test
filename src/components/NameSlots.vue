<!--
 * @Date: 2021-11-18
 * @Description: 
-->
<template>
  <div>
    <header>
      <slot name="header" />
    </header>

    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
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