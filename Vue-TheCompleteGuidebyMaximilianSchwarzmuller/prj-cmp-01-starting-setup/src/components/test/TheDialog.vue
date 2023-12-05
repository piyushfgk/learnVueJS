<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
    <dialog :open="isDialogOpen" ref="closeModal">
      <header>
        Dialog Header
        <button @click="closeDialog">x</button>
    </header>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpen: false,
    };
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
        // this.$refs.closeModal.close();
    },
  },
};
</script>
