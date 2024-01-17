import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
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
    },
    getters: {
        finalCounter(state, getters, rootState, rootGetters) {
            console.log({
                "isAuth": rootState.isAuth,
                "isUserAuthenticated": rootGetters.userIsAuthenticated,
                "message": "isAuth access from counter module",
                "getters": getters,
                "rootState": rootState,
                "rootGetters": rootGetters
            });
            return state.counter * 2;
        },
        normaliseCounter(_, getters) {
            const finalCounter = getters.finalCounter;

            if(finalCounter < 0) return 0;
            if(finalCounter > 100) return 100;

            return finalCounter;
        },
    }
};

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isAuth: false
        }
    },
    mutations: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    },
    actions: {
        setLogin(context) {
            context.commit('login');
        },
        setLogout(context) {
            context.commit('logout');
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isAuth;
        }
    }
});

const app = createApp(App);

app.use(store);
app.mount('#app');
