<template>
  <li>
    <h2>{{ name }} <span v-if="favorite" class="contact--favorite">(Favorite)</span></h2>
    <button @click="this.$emit('toggle-favorite', id)">Toggle Favorite</button>
    <button @click="showDetails">
      {{ isVisible === false ? "Show" : "Hide" }} Details
    </button>
    <button class="btn--delete" ref="deleteBtnContact" @click="deleteContact">Delete</button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ mobileNumber }}</li>
      <li><strong>Email:</strong> {{ emailId }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  emits: ['toggle-favorite','delete-contact'],
  props: {
    id: Number,
    name: {
      type: String,
    },
    mobileNumber: {
      type: String
    },
    emailId: {
      type: String
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setFavoriteStyle() {
      return this.favorite ? 'contact--favorite' : ''
    }
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showDetails() {
      this.isVisible = !this.isVisible;
    },
    deleteContact() {
      // console.dir(this.$refs.deleteBtnContact)

      // Show a confirmation dialog
      const userConfirmed = confirm("Are you sure?");

      if (userConfirmed) this.$emit('delete-contact', this.id)
      else return false;
    }
  },
};
</script>
