<!--
 * @Date: 2021-11-29
 * @Description: 
-->
<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Posts",
    data() {
        return {
            posts: [{ id: 1, name: "Testing Vue Router" }]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>