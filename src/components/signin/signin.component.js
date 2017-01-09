import authService from '../../services/auth.service';
import {SIGN_IN, SIGN_OUT} from '../../modules/auth/auth.module';

export default  {
  beforeRouteEnter ( to, from, next ) {
    authService.protectRoute(next);
  },
  mounted() {
    // console.log(this.$router);
    // console.log(this.$route);
  },
  data   : () => {
    return {
      user : { email: 'stam@stam.st', password: '123456' },
      error: ""
    }
  },
  methods: {
    signin( user ) {
      this.$validator.validateAll();
      if( this.errors.any() ) return;

      authService.signin(user).then(res => {
        this.$store.commit(SIGN_IN);
        this.$router.go(-1);
        // this.$router.push({ name: 'shop' });
      }).catch(err => {
        this.error = err.error;
      })

    }
  }
}

