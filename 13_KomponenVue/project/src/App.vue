<template>
  <div id="App">
        <ol>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo }}
            </li>
        </ol>
        <input type="text" v-model="newTodo">
        <button v-on:click="addTodo">Tambahkan</button>
        <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
      NewTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
       this.newTodo = "";
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>