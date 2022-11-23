import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    errorLoad: '',
    pagination: 0,
    loadInProgress: false
  },
  mutations: {
    SET_PRODUCT(state, data) {
        state.products.push(...data);
        state.pagination++;
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
    },
    ADD_NEW_GOOD(state, data) {
      state.products.unshift(data);
    }
  },
  actions: {
    async fetchData({state, commit}) {
      if (state.loadInProgress) return;
      state.loadInProgress = true;

      fetch(`https://api.escuelajs.co/api/v1/products?offset=${state.pagination * 10}&limit=10`)
        .then(res => {
          if (!res.ok) throw new Error('Something went wrong');
          return res.json();
        })
        .then(res => {
          commit('SET_PRODUCT', res);
          state.loadInProgress = false;
        })
        .catch(error => {
          commit('SET_ERROR_LOAD');
          console.log(error);
        })
    }
  },
  modules: {
  }
})
