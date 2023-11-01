const app = Vue.createApp({
    data() {
        return {
            myname: 'Piyush Sachan',
            imgurl: 'https://static.javatpoint.com/tutorial/vue-js/images/vue-js.png',
            age: this.myage(),
            ageplus: this.myage(5)
        }
    },
    methods: {
        myage(plus = 0) {
            const dob = new Date('1984-08-13');
            const today = new Date();

            // Calculate the difference in milliseconds
            const ageDiff = today - dob;

            // Convert the age difference to a Date object
            const ageDate = new Date(ageDiff);

            // Extract the year from the Date object
            const age = ageDate.getUTCFullYear() - 1970;

            return age + plus;
        },
        favnumber() {
            const number = Math.round(Math.random());

            return number;
        }
    },
});

app.mount('#assignment');