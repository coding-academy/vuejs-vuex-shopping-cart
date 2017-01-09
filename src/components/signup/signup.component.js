import authService from '../../services/auth.service';

export default  {
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
        // TODO:
        //this.$store.commit('setSession');
        this.$router.push({ name: 'shop' });
      });
    }
  }
}