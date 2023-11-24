const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      fruitOptions: [
        { label: 'Apple', value: 'Apple|3' },
        { label: 'Banana', value: 'Banana|5' },
        { label: 'Mango', value: 'Mango|10' },
        // Add more fruit options as needed
      ],
      fruits: Array.from({ length: 2 }, () => ({ name: '', quantity: 0 })),
      selectedFruits: Array(2).fill(''),
      selectedQuantities: Array(2).fill(0),
      fruitQuantities: Array(2).fill([]),
    };
  },
  methods: {
    updateQuantity(index) {
      const [selectedFruit, quantity] = this.selectedFruits[index].split('|');
      this.fruits[index] = { name: selectedFruit, quantity: parseInt(quantity, 10) };
      this.fruitQuantities[index] = Array.from({ length: parseInt(quantity, 10) }, (_, i) => i + 1);
    },
  },
});

app.mount('#app');