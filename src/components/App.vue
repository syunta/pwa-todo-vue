<template>
  <div class="uk-container uk-width-medium">
    <h1 class="uk-h1 uk-text-center">TO;DO</h1>
    <todo-form v-bind:todos="todos"></todo-form>
    <ul class="uk-list uk-list-striped">
      <todo-item v-for="(todo, index) in todos"
                 v-bind:key="index"
                 v-bind:index="index"
                 v-bind:todo="todo"
                 v-bind:todos="todos">
      </todo-item>
    </ul>
    <button v-on:click="removeCompleted" class="uk-button uk-button-default uk-align-center">
      clear completed
    </button>
  </div>
</template>

<script>
  import TodoForm from "./TodoForm.vue";
  import TodoItem from "./TodoItem.vue";
  export default {
    name: 'app',
    data(){
      return {
        todos: [],
      }
    },
    methods: {
      removeCompleted: function () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
    },
    components: {
      TodoForm,
      TodoItem,
    },
  };
</script>

<style scoped>
  @import "../../node_modules/uikit/dist/css/uikit.min.css";
</style>
