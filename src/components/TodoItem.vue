<template>
  <li>
    <input v-model="todo.completed" type="checkbox" class="uk-checkbox">
    <span v-bind:class="{through: todo.completed}" class="uk-margin-left">
      {{ todo.content }}
    </span>
    <a v-on:click="removeTodo(key)" class="uk-align-right" uk-icon="icon: close"></a>
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
