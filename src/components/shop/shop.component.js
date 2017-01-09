import {mapGetters, mapMutations} from 'vuex';
import {ADD_TO_CART} from '../../modules/cart/cart.module';
import {UPDATE_QUANTITY} from '../../modules/shop/shop.module';

import Product from '../product';

export default {
  created () {
    this.$store.dispatch('getProducts');
  },
  methods   : {
    ...mapMutations({
      updateQuantity: UPDATE_QUANTITY,
      addToCart     : ADD_TO_CART
    })
  },
  computed  : {
    ...mapGetters(['products', 'loading'])
  },
  components: {
    Product,
  }

}

