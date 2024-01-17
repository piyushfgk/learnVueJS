import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import counterModule from './counter';

import { createStore } from 'vuex';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isAuth: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;