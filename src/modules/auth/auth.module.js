export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const state = {
  isLoggedIn: !!localStorage.getItem('token')
};

const mutations = {
  [SIGN_IN]( state ) {
    state.isLoggedIn = true;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
  },
}

const actions = {};
const getters = {
  isLoggedIn: state => state.isLoggedIn
};

export default {
  state,
  getters,
  actions,
  mutations
}