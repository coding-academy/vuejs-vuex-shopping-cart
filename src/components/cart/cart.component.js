import {mapGetters, mapMutations} from 'vuex';
import authService from '../../services/auth.service';
import {UPDATE_CART, REMOVE_FROM_CART} from '../../modules/cart/cart.module';

export default {
  methods : {
    whenQuantityChanges({item, quantity}){
      this.$store.commit({type: UPDATE_CART, item, quantity});
    },
    ...mapMutations({
      removeFromCart: REMOVE_FROM_CART
    }),
    checkout() {
      if( !authService.isLoggedIn() ) {
        this.$router.push({ name: 'signin' });
        return;
      }
      this.$store.dispatch('checkout');
    }
  },
  computed: {
    ...mapGetters([
      'checkoutPending',
      'error',
      'cart',
      'cartTotal',
      'cartLength'
    ]),
  }

}
