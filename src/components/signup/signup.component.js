import authService from '../../services/auth.service';
import {SIGN_IN} from '../../modules/auth/auth.module';
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
        this.$store.commit(SIGN_IN);
        this.$router.push({ name: 'shop' });
      });
    }
  }
}
