<template>
  <button v-on:click="removeCompleted" class="uk-button uk-button-default uk-align-center">
    clear completed
  </button>
</template>

<script>
  export default {
    name: 'todo-button',
    methods: {
      removeCompleted() {
        this.$store.dispatch('removeCompletedAsync', this.$store.state.todos)
      }
    }
  };
</script>

<style scoped>
</style>
