<template>
  <div>
    <h1>Todo List</h1>
    <div class="todo-form">
      <form v-if="type == 'todolist_add'" @submit.prevent="addTodo(todolist.text)">
        <input  v-model="newTodo" name="todo" placeholder="todo-name">
          <button>Add New Todo</button>
      </form>
    </div>

    <div class="todo-list">
      <div v-if="error">{{error}}</div>

      <ul>
        <li v-for= "todo in todolist" :key="todo.id" class="todo">
          <div class="content">
            <h3 v-if="!editing">{{todo.id}}. {{todo.text}}</h3>      

            <div v-else> 
              <input v-bind:value="doTodo"  @change="doTodoChange" type="text">
            </div>
          
            <div class="content">
              <button v-if="type == 'todolist_add'" @click="Edited(todo)">{{editing? 'update' : 'edit'}}</button>
            </div>

            <div class="content">
              <button v-if="type == 'todolist_add'"  @click="Completed(todo)">delete</button>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_ALL_TODOS = gql`
query getAllTodos {
  todolist {
    id
    text
    }
  }`;

const ADD_TODO = gql`
  mutation AddTodos($text: String = "") {
    insert_todolist(objects: {text: $text}) {
      returning {
        id
        text
      }
    }
  }`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    delete_todolist(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }`;

const EDIT_TODO = gql`
  mutation MyMutation($id: Int!, $text: String!) {
    update_todolist(where: {id: {_eq: $id}}, _set: {text: $text}) {
      affected_rows
    }
  }`;

const SUBSCRIBSION_TODO = gql`
  subscription MySubscription {
      todolist {
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
            error: null,
            type: 'todolist_add',
            editing: false,
            doTodo: ""
          }
  },
  apollo:{
    todolist:{
      query: GET_ALL_TODOS,
      error(error){
        this.error = JSON.stringify(error.message)
      }
    },
    $subscribe: {
      todolist: {
        query: SUBSCRIBSION_TODO,
        updateQuery: (previousResult, {SubcripsionData}) => {
          return SubcripsionData.data
        }
      }
    }
  },
  components : {
  },
  methods: {
    OnSubmit(){
      // this.Alltodos.push(this.newTodo)
      // this.newTodo = '';
    },
    addTodo: function(){
      const text = this.newTodo && this.newTodo.trim()
      this.$apollo.mutate({
        mutation: ADD_TODO,
        variables: {
          text: text
        },
        update: (cache, {data: {insert_todolist}}) => {
          try{
            if(this.type == "todolist_add"){
              const data = cache.readQuery({
                query: GET_ALL_TODOS
              })
              const inserted_todo = insert_todolist.returning;
              data.todolist.splice(0,0, inserted_todo[0]);
              cache.writeQuery({
                query: GET_ALL_TODOS,
                data
              })
            }
          } catch (error){
            console.log(error)
          }
        this.newTodo = '';
        }
      })
    },
    Completed: function(todo){
      this.$apollo.mutate({
        mutation: DELETE_TODO,
        variables: {
          id: todo.id
        },
        update: (store, {data: {delete_todolist}}) => {
          if(delete_todolist.affected_rows){
            if(this.type == "todolist_add"){
              const data = store.readQuery({
                query: GET_ALL_TODOS
              })
              data.todolist = data.todolist.filter(t => {
                return t.id != todo.id
              })
              store.writeQuery({
                query: GET_ALL_TODOS,
                data
              })
            }
          }
        }
      })
    },
    doTodoChange(params){
      this.doTodo = params.target.value;
    },
    Edited: function(todo){
      this.editing = this.editing == true? false: true;
      if(this.editing){
        this.doTodo = todo.text;

      } else{
        todo.text = this.doTodo;
      }
      this.$apollo.mutate({
        mutation: EDIT_TODO,
        variables: {
          id: todo.id,
          text: todo.text
        }
      })
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

button:hover {
  background-color: #a6a6a6;
  opacity: 80%;
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

