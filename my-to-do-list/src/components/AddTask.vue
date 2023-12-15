<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <form>
        <div class="row">
          <div class="col-sm-10">
            <div class="form-group">
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputName2"
                placeholder="Enter task detail"
              />
            </div>
          </div>
          <div class="col-sm-2">
            <button type="submit" class="btn btn-primary btn-lg">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.panel {
   background: rgb(63, 61, 61);
}

form{
    margin-top:1.8rem
}
</style>
