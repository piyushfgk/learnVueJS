<template>
  <ul>
    <li :class="{ active: activeButton === 'poor' }">
      <button type="button" @click="setActiveButton('poor')">Poor</button>
    </li>
    <li :class="{ active: activeButton === 'average' }">
      <button type="button" @click="setActiveButton('average')">Average</button>
    </li>
    <li :class="{ active: activeButton === 'great' }">
      <button type="button" @click="setActiveButton('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeButton: null,
  //   };
  // },
  computed: {
    activeButton() {
      return this.modelValue;
    }
  },
  methods: {
    setActiveButton(option) {
      // this.activeButton = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #ce2ada;
  background: #ce2adadc;
}

.active button {
  background: #ce2adadc;
  color: #fff;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  padding: 0;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 20px;
}
</style>
