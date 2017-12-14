export const GET_PRODUCTS = 'shop/GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'shop/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'shop/GET_PRODUCTS_ERROR';

import shopService from '../../services/shop.service.js';

const state = {
  loading : false,
  products: [],
};


const mutations = {
  [GET_PRODUCTS]( state ) {
    state.loading = true;
  },
  [GET_PRODUCTS_SUCCESS] ( state, products ) {
    state.products = products;
    state.loading = false;
  },
  [GET_PRODUCTS_ERROR] ( state, products ) {
    state.loading = false;
  }
}

const getters = {
  products: state => state.products,
  loading : state => state.loading
}


const actions = {
  getProducts ( { commit } ) {
    if( state.products.length ) {
      commit(GET_PRODUCTS_SUCCESS, state.products);
      return;
    }
    commit(GET_PRODUCTS);
    shopService.getProducts().then(products => {
      commit(GET_PRODUCTS_SUCCESS, products);
    }).catch(err => {
      commit(GET_PRODUCTS_ERROR, err);
    });
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
