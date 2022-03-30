<template>
  <div class="app">
    <h2>Todo List</h2>
    <div class="taskList">
      <div
        class="taskItem"
        v-for="(taskItem, indexItem) in tasks"
        :key="indexItem"
      >
        <TaskItem
          :task="taskItem"
          :index="indexItem"
          @edit-task="editTask"
          @delete-task="deleteTask"
        />
      </div>
    </div>
    <div class="userInput">
      <input type="text" v-model="currentTask" />
      <div class="inputButton">
        <button @click="addTask">Tambahkan</button>
      </div>
    </div>
    <div v-if="tasks.length > 3" class="messages">Hebat!</div>
  </div>
</template>

<script>
import TaskItem from "@/components/Task.vue";
<<<<<<< HEAD
import TaskItem from ""
=======
>>>>>>> a8d5f87cdc9ef6c814721455bc5c8afaa3e27fc1

export default {
  name: "app",
  components: {
    TaskItem,
  },
  data() {
    return {
      tasks: [],
      currentTask: "",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
      this.currentTask = "";
    },
    editTask({ index, task }) {
      this.tasks[index] = task;
      this.tasks = this.tasks.map((currentTask, currentIndex) => {
        if (currentIndex === index) {
          return task;
        }
        return currentTask;
      });
    },
    deleteTask(index) {
      this.tasks = this.tasks.filter(
        (_, currentIndex) => currentIndex !== index
      );
    },
  },
};
</script>

<style scoped>
.userInput {
  width: 100%;
  display: flex;
}
input {
  width: 80%;
}
.inputButton {
  width: 20%;
  text-align: center;
}
</style>