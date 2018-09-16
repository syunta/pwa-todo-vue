<template>
  <ul class="uk-list uk-list-striped">
    <li v-for="todo in todos">
      <input v-model="todo.completed" type="checkbox" class="uk-checkbox">
      <span v-if="!todo.completed" class="uk-margin-left">
        {{ todo.content }}
      </span>
      <del v-else class="uk-margin-left">
        {{ todo.content }}
      </del>
      <a v-on:click="removeTodoAsync(todo.content)" class="uk-align-right" uk-icon="icon: close"></a>
    </li>
  </ul>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'todo-list',
    computed: mapState(['todos']),
    methods: mapActions(['loadAllAsync', 'removeTodoAsync']),
    mounted: function () {
      this.loadAllAsync();
    }
  };
</script>

<style scoped>
</style>