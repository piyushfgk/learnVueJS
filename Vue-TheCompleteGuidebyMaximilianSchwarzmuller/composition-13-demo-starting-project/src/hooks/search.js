import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchItem) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');
  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchItem].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  watch(enteredSearchTerm, (newValue) => {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  return [enteredSearchTerm, availableItems, updateSearch];
}
