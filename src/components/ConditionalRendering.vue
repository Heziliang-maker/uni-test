<!--
 * @Date: 2021-11-15
 * @Description: 条件渲染
-->

<template>
  <div>
    <nav>
      <a
        id="profile"
        href="/profile"
      >
        My Profile
      </a>
      <a
        id="admin"
        v-if="admin"
        href="/admin"
      >
        Admin
      </a>
    </nav>
    <a
      id="user"
      href="/profile"
    >My Profile</a>
    <ul
      v-show="shouldShowDropdown"
      id="user-dropdown"
    >
      <!-- dropdown content -->
    </ul>
  </div>
</template>

<script>
export default {
    name: "ConditionalRendering",
    data() {
        return {
            admin: false,
            shouldShowDropdown: false
        };
    }
};
</script>

<style lang="scss" scoped>
</style>