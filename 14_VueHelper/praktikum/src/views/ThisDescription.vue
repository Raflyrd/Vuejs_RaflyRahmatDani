<template>
  <div id="thisDescription">
    <button class="btn m-5"><router-link to="/">kembali</router-link></button>
    <div class="card">
      <div class="card-header">
        <h4>
          {{ getDataTodos[idTodos].todo }}
        </h4>
      </div>
      <div class="card-body">
        {{ getDataTodos[idTodos].description }}
      </div>
      <div class="card-footer">
        <input type="text" v-model="newDescription" />
        <button
          class="btn"
          @click="editDescription(idTodos, getDataTodos[idTodos].todo)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "thisDescription",
  data() {
    return {
      newDescription: "",
      sendTodo: [],
    };
  },
  computed: {
    getDataTodos() {
      return this.$store.state.todos;
    },
    idTodos() {
      return this.$route.params.id;
    },
  },
  methods: {
    editDescription(id, todo) {
      if (this.newDescription != "") {
        this.description = this.newDescription;
        this.sendTodo = {
          id: id,
          description: this.description,
          todo: todo,
        };
        this.$store.dispatch("editDescription", this.sendTodo);
        this.newDescription = "";
      }
    },
  },
};
</script>

<style scoped>
</style>