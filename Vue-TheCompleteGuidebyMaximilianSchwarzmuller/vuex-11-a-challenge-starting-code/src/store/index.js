import { createStore } from 'vuex';
import productsModule from './modules/products';
import carModule from './modules/cart';

const store = createStore({
  modules: {
    products: productsModule,
    cart: carModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
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
    isAuthenticated(state) {
        console.log(state.isLoggedIn);
        return state.isLoggedIn;
    }
  }
});

export default store;
