import authService from '../../services/auth.service';

export default  {
  beforeRouteEnter ( _, __, next ) {
    authService.protectRoute(next);
  },
  data   : () => {
    return {
      user : { email: '', password: '' },
      error: ""
    }
  },
  methods: {
    signup( user ) {
      this.$validator.validateAll();
      if( this.errors.any() ) return;

      authService.signup(user).then(res => {
        this.$store.commit('setSession');
        this.$router.push({ name: 'shop' });
      });
    }
  }
}