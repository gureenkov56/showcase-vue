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
    },
    SORT_PRODUCTS_BY(state, sortType){
      switch (sortType) {
        case 'cheaperFirst':
          state.products.sort((a, b) => a.price < b.price ? -1 : 1);
          break;
        case 'cheaperLast':
          state.products.sort((a, b) => a.price > b.price ? -1 : 1);
          break;
        case 'byName':
          state.products.sort((a, b) => a.title < b.title ? -1 : 1);
          break;
        default:
          state.products.sort((a, b) => a.id < b.id ? -1 : 1);
      }
    },
    REMOVE_PRODUCT(state, id) {
      state.products.splice(state.products.findIndex(el => el.id === id), 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
