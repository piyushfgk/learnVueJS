<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-1" data-toggle="tooltip" data-placement="left" title="Toggle task"><input type="checkbox" /></div>
      <div class="col-sm-10" :class="{'is-completed': isCompleted === true }"><h4>{{ title }}</h4></div>
      <div class="col-sm-1">
            <button class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="right" title="Delete">
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'isCompleted'],
}
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px;
  border: 0.5px solid rgb(157, 173, 206);
  border-radius: 5px;
}

h4 {
  margin: 0;
}

input[type='checkbox']{
   cursor: pointer;
}

.is-completed{
    text-decoration: line-through;
    color: gray;
    font-style: italic;
}
</style>
