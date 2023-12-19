<template>
  <the-message v-if="isTasksAvailable === false" :title="errorTaskTitle" :message="errorTaskMessage" @close="confirmMessage"></the-message>
  <the-header>
    <search-task @filtered-tasks="onFilteredTasks"></search-task>
  </the-header>
  <div class="container" v-if="searchTerm !== ''">
    <p class="text-danger text-right">
      <em
        >You searched for: <strong>{{ searchTerm }}</strong></em
      >
    </p>
  </div>
  <section class="add-task">
    <div class="container">
      <add-task></add-task>
    </div>
  </section>
  <task-list :tasks="filteredTasks"></task-list>
</template>

<script>
function getMaxIdPlusOne(resources) {
  // Use Array.reduce to find the maximum id
  const maxId = resources.reduce((max, resource) => {
    return resource.id > max ? resource.id : max;
  }, 0);

  // Return maxId + 1
  return maxId + 1;
}

import TheHeader from "./components/layout/TheHeader.vue";
import SearchTask from "./components/SearchTask.vue";
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";

export default {
  components: { TheHeader, SearchTask, AddTask, TaskList },
  watch: {
    "storedTasks.length"(newLength) {
      if(newLength < 1) {
        this.errorTaskTitle = "No existing tasks found!";
        this.errorTaskMessage = "<h2>Add some tasks</h2><p>Enter a task and press enter to add one.</p>";
        this.isTasksAvailable = false;
      } else {
        this.errorTaskTitle = "";
        this.errorTaskMessage = "";
        this.isTasksAvailable = true;
      }
    }
  },
  computed: {
    formattedDateTime() {
      // Format the date using currentDate or any other reactive variable
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Months are zero-indexed

      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      return formattedDate + " " + formattedTime;
    },
  },
  data() {
    return {
      filteredTasks: [],
      isTasksAvailable: null,
      errorTaskTitle: '',
      errorTaskMessage: '',
      isLoading: false,
      storedTasks: [],
      searchTerm: "",
    };
  },
  mounted() {
    this.loadTaskList();
    this.filteredTasks = this.storedTasks;
  },
  provide() {
    return {
      addTask: this.addTask,
      deleteTask: this.deleteTask,
      setTaskStatus: this.setTaskStatus,
    };
  },
  methods: {
    loadTaskList() {
      this.isLoading = true;
      this.isTasksAvailable = true;
      this.errorTaskTitle =  '';
      this.errorTaskMessage = '';
      fetch(
        'https://vue-http-demo-c7025-default-rtdb.asia-southeast1.firebasedatabase.app/my-to-do-list.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong. Could not fetch data!");
          }
        })
        .then((data) => {
          this.isLoading = false;
          const tasks = [];

          for (const id in data) {
            tasks.push({
              id: id,
              title: data[id].title,
              isCompleted: data[id].isCompleted,
              createdAt: data[id].createdAt,
            });
          }

          this.storedTasks = tasks;
        })
        .catch((error) => {
          this.isLoading = false;
          this.isTasksAvailable = false;
          this.errorTaskTitle =  'Their is some problem';
          this.errorTaskMessage = error.message;
        });
    },
    onFilteredTasks(searchTerm) {
      this.searchTerm = searchTerm;

      if (searchTerm === "") {
        this.filteredTasks = this.storedTasks;
      } else {
        this.filteredTasks = this.storedTasks.filter((task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    },
    addTask(taskTitle) {

      this.isTasksAvailable = true;
      this.errorTaskTitle =  '';
      this.errorTaskMessage = '';

      const newTask = {
            id: getMaxIdPlusOne(this.storedTasks),
            title: taskTitle,
            isCompleted: false,
            createdAt: this.formattedDateTime
          };

      fetch(
        'https://vue-http-demo-c7025-default-rtdb.asia-southeast1.firebasedatabase.app/my-to-do-list.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        }
      ).then(response => {
        if(response.ok === false) {
          throw new Error('Could not save data!');
        } else {
          this.storedTasks.unshift(newTask);
        }
      }).catch((error) => {
        this.isTasksAvailable = false;
        this.errorTaskTitle =  'Their is some problem';
        this.errorTaskMessage = 'Error submitting experience, please try again later. ' + error.message;
      });

    },
    deleteTask(id) {
      this.storedTasks = this.storedTasks.filter((task) => task.id !== id);

      this.filteredTasks = this.storedTasks;
    },
    setTaskStatus(id, status) {
      // Find the index of the task in storedTasks
      const taskIndex = this.storedTasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        // Set isCompleted to true or false based on the current value
        this.storedTasks[taskIndex].isCompleted = status;
      }

      this.filteredTasks = this.storedTasks;
    },
    confirmMessage() {
      this.isTasksAvailable = true;
    }
  },
};
</script>

<style scoped>
section.add-task {
  margin-top: 3rem;
}
.page-header {
  border-bottom: 2px solid #265a88;
}
</style>
