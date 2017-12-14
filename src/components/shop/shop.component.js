import {mapGetters, mapMutations} from 'vuex';
import {ADD_TO_CART, UPDATE_CART} from '../../modules/cart/cart.module';

import Product from '../product';

export default {
  created () {
    this.$store.dispatch('getProducts');
  },
  methods   : {
    whenQuantityChanges({product, quantity}){
      this.$store.commit({type: UPDATE_CART, item: product, quantity});
    }
  },
  computed  : {
    ...mapGetters(['products', 'loading'])
  },
  components: {
    Product,
  }

}

