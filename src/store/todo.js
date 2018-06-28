import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // [{ content: "", completed: false }]
    todos: []
  },
  mutations: {
    addTodo (state, content) {
      state.todos.push({
        content: content,
        completed: false,
      });
    },
    removeTodo (state, index) {
      state.todos.splice(index, 1);
    },
    removeCompleted (state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    },
  }
});
