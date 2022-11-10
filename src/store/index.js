import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    errorLoad: ''
  },
  getters: {
    lengthOfProductsList(state) {
      return state.products.length;
    }
  },
  mutations: {
    SET_PRODUCT(state, data) {
        state.products = data;
    },
    SET_ERROR_LOAD(state) {
      state.errorLoad = 'Опс... Ошибка загрузки. Попробуйте обновить страницу.';
    }
  },
  actions: {
  },
  modules: {
  }
})
