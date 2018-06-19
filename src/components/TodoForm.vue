<template>
  <div class="uk-margin">
    <label class="uk-form-label" for="new-todo">new task</label>
    <div class="uk-form-controls">
      <div class="uk-inline">
        <input v-model="newTodo" id="new-todo" class="uk-input uk-form-width-large" type="text">
        <a v-on:click="addTodo"
           v-show="!isEmptyForm"
           class="uk-form-icon uk-form-icon-flip" uk-icon="icon: plus"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo-form',
    props: ['todos'],
    data(){
      return {
        newTodo: "",
      }
    },
    methods: {
      addTodo: function () {
        if (this.isEmptyForm) return;
        this.todos.push({
          content: this.newTodo,
          completed: false,
        });
        this.newTodo = "";
      },
    },
    computed: {
      isEmptyForm: function () {
        return this.newTodo === "";
      }
    }
  };
</script>

<style scoped>
</style>
