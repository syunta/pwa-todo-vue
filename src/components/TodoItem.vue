<template>
  <li>
    <input v-model="todo.completed" type="checkbox" class="uk-checkbox">
    <span v-if="!todo.completed" class="uk-margin-left">
      {{ todo.content }}
    </span>
    <del v-else class="uk-margin-left">
      {{ todo.content }}
    </del>
    <a v-on:click="removeTodo(index)" class="uk-align-right" uk-icon="icon: close"></a>
  </li>
</template>

<script>
  export default {
    name: 'todo-item',
    props: ['index', 'todo', 'todos'],
    methods: {
      removeTodo: function (index) {
        this.todos.splice(index, 1);
      },
    }
  };
</script>

<style scoped>
</style>
