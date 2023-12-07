const app = Vue.createApp({
    data() {
        return {
            selectedMisCsvr: [],
            serialNos: [],
            selectedQuantities: []
        }
    },
    methods: {
        updateSerialList(index) {
              const [itemNumber, quantity] = selectedMisCsvr[index].split("|");

            console.log({
                itemNumber: itemNumber,
                quantity: quantity,
                selectedRow: index
            });
            // Generate the list of serial numbers
            // const serialList = [];
            // for (let i = 1; i <= quantity; i++) {
            //     const optionValue = itemNumber + '|' + i;
            //     if (!this.usedSerialNumbers[index].includes(optionValue)) {
            //         serialList.push({ label: itemNumber, value: optionValue });
            //     }
            // }

            // // Update the Serial No. column
            // this.$set(this.serialNumbers, index, serialList);
        }
    },
})


app.mount("#app");