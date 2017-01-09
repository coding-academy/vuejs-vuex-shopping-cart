export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
export const CHECKOUT = 'cart/CHECKOUT';
export const CHECKOUT_SUCCESS = 'cart/CHECKOUT_SUCCESS';
export const CHECKOUT_ERROR = 'cart/CHECKOUT_ERROR';

import shopService from '../../services/shop.service';

const state = {
  items  : [],
  loading: false,
  error  : null
}

const mutations = {
  [ADD_TO_CART]( state, item ) {
    let itemExists = state.items.indexOf(item) > -1;
    if( !itemExists ) {
      state.items.push(item);
    }
  },
  [REMOVE_FROM_CART]( state, item ) {
    item.quantity = 0;
    state.items.splice(state.items.indexOf(item), 1);
  },
  [CHECKOUT]( state ) {
    state.loading = true;
  },
  [CHECKOUT_SUCCESS]( state ) {
    state.items = [];
    state.loading = false;
  },
  [CHECKOUT_ERROR]( state, error ) {
    state.error = error;
    state.loading = false;
  }
}

const actions = {
  checkout( { commit } ) {
    commit(CHECKOUT);
    shopService.checkout().then(_ => {
      commit(CHECKOUT_SUCCESS);
      swal({
        title: "Busted!!!!",
        type : "success",
        text : "I took all your money",
      });
    }).catch(err => {
      commit(CHECKOUT_ERROR, err);
    });
  },
};

const getters = {
  items          : state => state.items,
  checkoutPending: state => state.loading,
  error          : state => state.error,
  cart( state ) {
    return state.items.filter(i => i.quantity);
  },
  cartTotal( _, getters ) {
    return getters.cart.reduce(( acc, item ) => {
      return acc + (parseInt(item.quantity) * item.price);
    }, 0);
  },
  cartLength( _, getters ) {
    return getters.cart.length;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}