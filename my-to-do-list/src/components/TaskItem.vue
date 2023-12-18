<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-sm-1"
        data-toggle="tooltip"
        data-placement="left"
        title="Toggle task"
      >
        <input type="checkbox" :checked="isCompleted" @click="inputStatus"/>
      </div>
      <div class="col-sm-8" :class="{ 'is-completed': isCompleted === true }">
        <h4>{{ title }}</h4>
      </div>
      <div class="col-sm-2">
        <h5 class="text-muted">{{ dateFormat }}</h5>
      </div>
      <div class="col-sm-1">
        <button
          class="btn btn-danger btn-sm"
          data-toggle="tooltip"
          data-placement="right"
          title="Delete"
          @click="$emit('delete-task', id)"
        >
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "isCompleted", "addedOn"],
  emits: ['delete-task','set-task-status'],
  computed: {
    dateFormat() {
      const date = new Date(this.addedOn);
      const year = date.getFullYear();

      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // Get the month as a three-character string
      const monthAbbreviation = date.toLocaleString('en-US', { month: 'short' });
      const formattedDate = `${day.toString().padStart(2, "0")}-${monthAbbreviation}-${year}`;
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      return formattedDate + " " + formattedTime;
    }
  },
  methods: {
    inputStatus(event) {
      const isPending = event.target.checked;

      this.$emit('set-task-status', this.id, isPending);
    }
  },
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px;
  border: 0.5px solid rgb(157, 173, 206);
  border-radius: 5px;
  background: #fff;
}

h4 {
  margin: 0;
}

input[type="checkbox"] {
  cursor: pointer;
}

.is-completed {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}

.text-muted{
  font-size: 1rem;
  font-style: italic;
  text-align: right;
}
</style>
