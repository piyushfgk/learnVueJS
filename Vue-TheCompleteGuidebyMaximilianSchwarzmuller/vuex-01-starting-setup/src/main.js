import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter += payload.value;
        }
    },
    actions: {
        increment(context) {
            console.log(context);
            context.commit('increment');
        },
        increase(context, payload) {
            setTimeout(() => {
                context.commit('increase', payload);
            }, 1500); // Execute after 1.5 seconds
            // actions are allowed to run async code
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normaliseCounter(_, getters) {
            const finalCounter = getters.finalCounter;

            if(finalCounter < 0) return 0;
            if(finalCounter > 100) return 100;

            return finalCounter;
        }
    }
});

const app = createApp(App);

app.use(store);
app.mount('#app');