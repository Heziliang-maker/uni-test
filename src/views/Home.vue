<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ToDoApp />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ToDoApp from "@/components/ToDoApp";

export default {
    name: "Home",
    components: {
        HelloWorld,
        ToDoApp
    }
};
</script>
