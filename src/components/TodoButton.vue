<template>
  <button v-on:click="removeCompleted" class="uk-button uk-button-default uk-align-center">
    clear completed
  </button>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'todo-button',
    methods: mapMutations(['removeCompleted']),
  };
</script>

<style scoped>
</style>
