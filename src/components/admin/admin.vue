<template lang="html">

  <section class="admin container below-nav">
    <h1>admin Component</h1>
  </section>

</template>

<script lang="js">
  import authService from '../../services/auth.service';

  export default  {
    name: 'admin',
    props: [],
    beforeRouteEnter ( to, from, next ) {
      authService.protectRoute(next);
    },    
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .admin {

  }
</style>
