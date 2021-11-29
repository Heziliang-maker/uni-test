<!--
 * @Date: 2021-11-29
 * @Description: 
-->
<template>
  <div>
    <button @click="redirect">Click to Edit</button>
  </div>
</template>

<script>
export default {
    name: "TestingRouter",
    props: ["isAuthenticated"],
    methods: {
        redirect() {
            if (this.isAuthenticated) {
                this.$router.push(`/posts/${this.$route.params.id}/edit`);
            } else {
                this.$router.push("/404");
            }
        }
    }
};
</script>
