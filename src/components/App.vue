<template>
  <div class="uk-container uk-width-medium">
    <h1 class="uk-heading-primary uk-text-center">TO;DO</h1>
    <div class="uk-inline">
      <input v-model="newTodo" class="uk-input" type="text">
      <a v-on:click="addTodo" class="uk-form-icon uk-form-icon-flip" uk-icon="icon: plus"></a>
    </div>
    <ul class="uk-list uk-list-striped">
      <todo-item v-for="(todo, index) in todos"
                 v-bind:todo="todo"
                 v-bind:key="index"
                 v-bind:todos="todos">
      </todo-item>
    </ul>
    <button v-on:click="removeCompleted" class="uk-button uk-button-default">
      clear completed
    </button>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem.vue";

  export default {
    name: 'app',
    data(){
      return {
        newTodo: "",
        todos: [],
      }
    },
    methods: {
      addTodo: function () {
        this.todos.push({
          content: this.newTodo,
          completed: false,
        });
      },
      removeCompleted: function () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
    },
    components: {
      TodoItem,
    },
  };
</script>

<style>
  @import "../../node_modules/uikit/dist/css/uikit.min.css";
</style>
