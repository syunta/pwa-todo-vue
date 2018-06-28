<template>
  <ul class="uk-list uk-list-striped">
    <li v-for="(todo, index) in todos">
      <input v-model="todo.completed" type="checkbox" class="uk-checkbox">
      <span v-if="!todo.completed" class="uk-margin-left">
        {{ todo.content }}
      </span>
      <del v-else class="uk-margin-left">
        {{ todo.content }}
      </del>
      <a v-on:click="removeTodo(index)" class="uk-align-right" uk-icon="icon: close"></a>
    </li>
  </ul>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'todo-list',
    computed: mapState(['todos']),
    methods: mapMutations(['removeTodo']),
  };
</script>

<style scoped>
</style>