<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hr>
    <p>id:{{id}}</p>
    <CustomTextarea />
    <button @click="handleClickDi(12345)">滴滴滴</button>
    <button @click="handleClickDi(1234)">滴滴滴滴滴滴</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CustomTextarea from "@/components/ComplexForm";

export default {
    name: "Home",
    components: {
        HelloWorld,
        CustomTextarea
    },
    data() {
        return {
            id: null
        };
    },
    watch: {
        $route(newValue, old) {
            // console.log("new=>", newValue, newValue.params.id);
            this.id = newValue.params.id;
        }
    },
    methods: {
        handleClickDi(id) {
            this.$router.push(`/home/${id}`);
        }
    }
};
</script>
