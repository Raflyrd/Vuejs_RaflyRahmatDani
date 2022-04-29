<template>
  <div>
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form @submit.prevent="OnSubmit">
        <input  v-model="id" name="todo" placeholder="todo-name">
          <button>Add New Todo</button>
      </form>
    </div>
    <div>
      {{ gql }}
    </div>

    <!-- Tabel 1 -->

    <div class="todo-list">
    <ul v-if="this.id==''">
    <li v-for="(todo, index) in Alltodos" :key="todo.id" class="todo">
        <div class="content">
          <h3>{{todo.id}}</h3>
        </div>
        <div class="content">
          <button class="far fa-times-circle fa-2x" @click="Completed(index)">x</button>
        </div>
      </li>
  </ul>
  <ul v-else>
    <li class="todo">
      <div class="content">
        <h3>{{todolist_by_pk.id}}</h3>
      </div>
      <div class="content">
        <h3>{{todolist_by_pk.text}}</h3>
      </div>
    </li>
  </ul>

<!-- Tabel 2 -->
<hr>


  <ul>
    <li v-for= "todo in todolist" :key="todo.id" class="todo">
        <div class="content">
          <h3>{{todo.id}}</h3>
        </div>
        <div class="content">
          <h3>{{todo.text}}</h3>
        </div>
        <div class="content">
          <button class="far fa-times-circle fa-2x" @click="Completed(index)">x</button>
        </div>
      </li>
  </ul>
    

</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const get_Alltodos = gql`
  query getAlltodos {
    todolist{
      id
      text
    }
  }`;

const get_Alltodos_id = gql`
  query getAlltodos($id: Int!){
    todolist_by_pk(id: $id){
        id
        text
      }
    }`;
    
export default {
  data() {
    return {
            id: "",
            newTodo: "",
            Alltodos: [],
          }
  },
  apollo:{
    todolist:{
      query: get_Alltodos
    },
    todolist_by_pk:{
      query: get_Alltodos_id,
      variables(){
        return{
          id: this.id,
        };
      },
    },
  },
  components : {
  },
  methods: {
    OnSubmit(){
      this.Alltodos.push(this.newTodo)
      this.newTodo = '';
    },
    Completed(index){
      this.Alltodos.splice(index,1);
    }
  }
}
</script>

<style  scoped>
body {
  padding-top: 1em;
  padding-bottom: 1em;
}
input{
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center
}
.todo-form{
  margin-top: 30px;
}
.todo{
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  margin-top: 10px;
  padding:10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}

h3{
  margin: 0px;
  padding: 0px;
}
li{
  list-style-type: none;
  width: 50%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216)
}
.content{
  flex:1;
}
i{
  cursor: pointer;
  color: red;
}

table, tr, td{
  border: 1px solid black;
  width: 50%;
}
</style>