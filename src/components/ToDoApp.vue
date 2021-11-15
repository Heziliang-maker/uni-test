<!--
 * @Date: 2021-11-15
 * @Description: 
-->

<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="{'completed':todo.completed}"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        data-test="check"
        v-model="todo.completed"
      >
    </div>
    <form
      @submit.prevent="handleClickAdd"
      data-test="form"
    >
      <input
        data-test="input"
        v-model="value"
        type="text"
      >
      <button
        type="submit"
        @click="handleClickAdd"
      >新增</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "ToDoApp",
    data() {
        return {
            value: "",
            todos: [
                {
                    id: 1,
                    text: "Learn Vue.js 3",
                    completed: false
                }
            ]
        };
    },
    methods: {
        handleClickAdd() {
            this.todos.push({
                id: 2,
                text: this.value,
                completed: false
            });
        }
    }
};
</script>

<style lang="css" scoped>
.completed {
    border: 1px solid red;
}
</style>