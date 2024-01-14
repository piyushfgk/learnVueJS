import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isAuth: false
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
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
        },
        setLogin(context) {
            context.commit('login');
        },
        setLogout(context) {
            context.commit('logout');
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
        },
        userIsAuthenticated(state) {
            return state.isAuth;
        }
    }
});

const app = createApp(App);

app.use(store);
app.mount('#app');
