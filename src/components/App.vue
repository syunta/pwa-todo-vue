<template>
  <div class="todo">
    <h1>TO;DO</h1>
    <input v-model="newTodo">
    <button v-on:click="addTodo">Add</button>
    <ul>
      <todo-item v-for="(todo, index) in todos"
                 v-bind:todo="todo"
                 v-bind:key="index"
                 v-bind:todos="todos">
      </todo-item>
    </ul>
    <button v-on:click="removeCompleted">clear completed</button>
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

<style scoped>
  .todo {
    text-align: center;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
</style>
