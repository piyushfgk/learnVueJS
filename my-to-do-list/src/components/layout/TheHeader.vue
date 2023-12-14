<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Brand" src="/img/brand-to-do.png" width="20" height="20" />
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <p class="navbar-text">My-To-Do-List</p>
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<style scoped>
p {
  font-weight: 600;
}
</style>
