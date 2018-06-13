<template>
  <li>
    <input type="checkbox" v-model="todo.completed">
    <span v-bind:class="{through: todo.completed}">{{ todo.content }}</span>
    <button v-on:click="removeTodo(key)">x</button>
  </li>
</template>

<script>
  export default {
    name: 'todo-item',
    props: ['key', 'todo', 'todos'],
    methods: {
      removeTodo: function (key) {
        this.todos.splice(key, 1);
      },
    }
  };
</script>

<style scoped>
  span.through {
    text-decoration: line-through;
  }
</style>
