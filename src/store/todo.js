import Vue from 'vue'
import Vuex from 'vuex'
import db from '../db'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // [{ content: "", completed: false }]
    todos: []
  },
  mutations: {
    loadAll (state, result) {
      state.todos = result;
    }
  },
  actions: {
    loadAllAsync ({ commit }) {
      db.getAll(function (result) {
        commit('loadAll', result);
      });
    },
    addTodoAsync ({ commit }, content) {
      db.put({
        content: content,
        completed: false,
      }, function () {
        db.getAll(function (result) {
          commit('loadAll', result);
        });
      });
    },
    removeTodoAsync ({ commit }, content) {
      db.delete(content, function () {
        db.getAll(function (result) {
          commit('loadAll', result);
        });
      });
    },
    removeCompletedAsync ({ commit }, todos) {
      let completed = todos.filter(todo => todo.completed);
      completed.forEach(function (todo) {
        db.delete(todo.content, function () {
          db.getAll(function (result) {
            commit('loadAll', result);
          });
        });
      });
    },
  }
});
