<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <task-item
        v-for="task in storedTasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :isCompleted="task.isCompleted"
      ></task-item>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },
  data() {
    return {
      storedTasks: [
        {
          id: 1,
          title: "Take groceries from market",
          isCompleted: false,
          createdAt: "2023-04-11 11:50:23",
        },
        {
          id: 2,
          title: "Study books for self",
          isCompleted: true,
          createdAt: "2023-04-11 11:51:23",
        },
        {
          id: 3,
          title: "Do meditation in the morning",
          isCompleted: false,
          createdAt: "2023-04-11 11:55:23",
        },
      ],
    };
  },
};
</script>
