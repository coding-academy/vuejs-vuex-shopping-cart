import {mapGetters, mapMutations} from 'vuex';
import {GET_PRODUCTS} from '../../modules/shop/shop.module';
import {ADD_TO_CART, UPDATE_CART} from '../../modules/cart/cart.module';

import Product from '../product';

export default {
  created () {
    this.$store.dispatch(GET_PRODUCTS);
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

