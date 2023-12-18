<template>
  <teleport to="body">
    <div class="backdrop" @click="$emit('close')"></div>
    <div class="my-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" @click="$emit('close')">&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body" v-html="message"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">
              Close
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </teleport>
</template>

<script>
export default {
  props: ["title", "message"],
  emits: ['close'],
};
</script>

<style scoped>
div.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

div.my-modal {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
