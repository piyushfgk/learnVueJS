<template>
  <form class="navbar-form navbar-right">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Search tasks..."
        v-model.trim="searchTerm"
        @input="onFilteredTasks"
      />
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </span>
    </div>
    <!-- /input-group -->
  </form>
</template>

<script>
export default {
  emits: ['filtered-tasks'],
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    onFilteredTasks(){
      this.$emit('filtered-tasks', this.searchTerm);
    }
  },
};
</script>
