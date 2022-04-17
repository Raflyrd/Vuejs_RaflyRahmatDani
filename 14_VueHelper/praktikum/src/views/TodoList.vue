<template>
  <div id="todolist">
    <div class="card">
      <div class="card-header">
        <h2>Todo List</h2>
      </div>
      <div class="card-body">
        <div class="list" v-for="(todo, index) in getTodos" :key="index">
          <div class="link" v-if="todo.modeEdit === false">
            <a @click="toDescriptionPage(index)">{{ index + 1 }}. {{ todo.todo }}
            </a>
          </div>

          <div class="link" v-else>
            <input type="text" v-model="valueEditTodo" />
          </div>
          <div id="btn" v-if="todo.modeEdit === false">
            <button class="btn bg-danger" @click="deleteTodo(index)">Hapus</button>
            <button class="btn" @click="onModeEdit(index, todo.todo, todo.description)">Edit</button>
          </div>
          <div id="btn" v-else>
            <button class="btn bg-danger" @click="deleteTodo(index)">hapus</button>
          </div>
        </div>
      </div>
      <div class="card-footer" v-if="modeEdit === false">
        <input type="text" v-model="newValueTodo" />
        <button class="btn" @click="addTodos">Tambahkan</button>
      </div>
      <div class="card-footer" v-else>
        <button class="btn" @click="editTodo(idTodo, todo.description)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getTodos() {
      return this.$store.state.todos;
    },
  },
  data() {
    return {
      newValueTodo: "",
      idTodo: 0,
      valueEditTodo: "",

      newDescription: "",
      modeEdit: false,
    };
  },
  methods: {
    addTodos() {
      if (this.newValueTodo != "") {
        this.$store.dispatch("getDataTodos", this.newValueTodo);
        this.newValueTodo = "";
      }
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodos", id);
    },
    onModeEdit(id, todo, description) {
      this.getTodos.splice(id, 1, {
        todo: todo,
        description: description,
        modeEdit: true,
      });
      this.idTodo = id;
      this.todo = todo;
      this.description = description;
      this.modeEdit = true;
    },
    editTodo(id, todo, description) {
      todo = this.valueEditTodo;
      const param = {
        id,
        todo,
        description,
      };
      this.$store.dispatch("editTodo", param);
      this.modeEdit = false;
      this.valueEditTodo = "";
    },
    toDescriptionPage(index) {
      this.$router.push({name : "ThisDescription", params: {id:index}});
    },
  },
};
</script>

<style></style>