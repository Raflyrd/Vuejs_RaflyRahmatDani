import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const persistedstate = createPersistedState({
  path: ["todos"],
});
export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    todos: [],
  },
  mutations: {
    addTodos(state, payload) {
      state.todos.push({
        todo: payload,
        description: "Belum ada deskripsi",
        modeEdit: false,
      });
    },
    actionDeleteTodo(state, payload) {
      state.todos.splice(payload, 1);
    },
    actionEditTodo(state, payload) {
      state.todos.splice(payload.id, 1, {
        todo: payload.todo,
        description: payload.description,
        modeEdit: false,
      });
    },
    actionEditDescription(state, payload) {
      state.todos.splice(payload.id, 1, {
        todo: payload.todo,
        description: payload.description,
        modeEdit: false,
      });
    },
  },
  actions: {
    getDataTodos(store, param) {
      store.commit("addTodos", param);
    },
    deleteTodos(store, param) {
      store.commit("actionDeleteTodo", param);
    },
    editTodo(store, param) {
      store.commit("actionEditTodo", param);
    },
    editDescription(store, param) {
      store.commit("actionEditDescription", param);
    },
  },
  modules: {},
});