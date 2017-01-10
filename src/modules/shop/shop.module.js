export const GET_PRODUCTS = 'store/GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'store/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'store/GET_PRODUCTS_ERROR';
export const UPDATE_QUANTITY = 'store/UPDATE_QUANTITY';

import shopService from '../../services/shop.service.js';

const state = {
  loading : false,
  products: [],
};


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
  },
  [UPDATE_QUANTITY]( _, { product, quantity } ) {
    product.quantity = quantity;
  }
}

const getters = {
  products: state => state.products,
  loading : state => state.loading
}

export default {
  state,
  getters,
  actions,
  mutations
}
