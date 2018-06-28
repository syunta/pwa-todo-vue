<template>
  <div class="uk-container uk-width-medium">
    <h1 class="uk-h1 uk-text-center">TO;DO</h1>
    <todo-form></todo-form>
    <todo-list></todo-list>
    <todo-button></todo-button>
  </div>
</template>

<script>
  import TodoForm from "./TodoForm.vue";
  import TodoList from "./TodoList.vue";
  import TodoButton from "./TodoButton.vue";

  export default {
    components: { TodoForm, TodoList, TodoButton },
  };
</script>

<style scoped>
</style>
