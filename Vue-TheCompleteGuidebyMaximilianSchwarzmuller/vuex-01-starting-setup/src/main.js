import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import counterModule from './store/counter';

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
