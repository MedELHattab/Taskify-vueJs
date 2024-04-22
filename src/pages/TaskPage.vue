<template>
  <div class="container">
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-8">
            <h2>Tasks <b>Details</b></h2>
          </div>
          <div class="center">
            <vs-button @click="active = !active">
              add task
            </vs-button>

          </div>
        </div>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>
              <a class="edit" title="Edit" @click="editTask(index)"><i class="material-icons">&#xE254;</i></a>
              <a class="delete" title="Delete" @click="deleteTask(task.id)"><i class="material-icons">&#xE872;</i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <form @submit.prevent="createandEditTask" >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="newTask.title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="newTask.description" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"> {{ newTask.id ? 'edit' : 'add' }}</button>
</form>

  </div>

</template>

<script setup>
import { ref, reactive , onMounted, onUpdated } from "vue";
import api from "../http/api";
import { createLogger } from "vuex";


const tasks = ref([]);
const showModal = ref(false);
const newTask = reactive({ id: "", status: '', title : '', description : '' , user_id : '' });

const fetchTasks = async () => {
  try {
    const response = await api.get('tasks/index');
    tasks.value = response.data.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
const createandEditTask  =  ()  =>{
  console.log(newTask)
  if(newTask.id ){
        updateTask();
  } else  createTask();
}
const createTask = async () => {
  try {
    const response = await api.post('tasks/store', newTask);
    console.log(response.data);
    tasks.value.push(response.data);

    // Loop through all keys of newTask and reset their values to empty strings
    for (const key of Object.keys(newTask)) {
      newTask[key] = '';
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
const updateTask = async () => {
  try {
    const response = await api.put('tasks/update/' + newTask.id, newTask);
    console.log(response.data);

    // Update the task in tasks.value array using map
    tasks.value = tasks.value.map(task => {
      if (task.id === newTask.id) {
        return response.data; // Replace the old task with the updated one
      } else {
        return task; // Keep other tasks unchanged
      }
    });

    // Reset newTask object
    for (const key of Object.keys(newTask)) {
      newTask[key] = '';
    }
  } catch (error) {
    console.error("Error updating task:", error);
  }
};



const deleteTask = async (id) => {
  try {
    await api.delete('tasks/destroy/' + id);
    
    // Filter out the task with the specified ID
    tasks.value = tasks.value.filter((task) => task.id !== id);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

const editTask = (index)=>{
      let tmp =  tasks.value[index] 
        for (const key of Object.keys(newTask)) {
      newTask[key] = tmp[key];
    }
}

onMounted(() => {
  fetchTasks();
});

</script>


<style scoped>
body {
  color: #404E67;
  background: #F5F7FA;
  font-family: 'Open Sans', sans-serif;
}

.table-wrapper {
  width: 700px;
  margin: 30px auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.table-title {
  padding-bottom: 10px;
  margin: 0 0 10px;
}

.table-title h2 {
  margin: 6px 0 0;
  font-size: 22px;
}

.table-title .add-new {
  float: right;
  height: 30px;
  font-weight: bold;
  font-size: 12px;
  text-shadow: none;
  min-width: 100px;
  border-radius: 50px;
  line-height: 13px;
}

.table-title .add-new i {
  margin-right: 4px;
}

table.table {
  table-layout: fixed;
}

table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
}

table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}

table.table th:last-child {
  width: 100px;
}

table.table td a {
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  min-width: 24px;
}

table.table td a.add {
  color: #27C46B;
}

table.table td a.edit {
  color: #FFC107;
}

table.table td a.delete {
  color: #E34724;
}

table.table td i {
  font-size: 19px;
}

table.table td a.add i {
  font-size: 24px;
  margin-right: -1px;
  position: relative;
  top: 3px;
}

table.table .form-control {
  height: 32px;
  line-height: 32px;
  box-shadow: none;
  border-radius: 2px;
}

table.table .form-control.error {
  border-color: #f50000;
}

table.table td .add {
  display: none;
}
</style>