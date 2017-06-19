<template>
    <div class="page">
      <menu-footer></menu-footer>
    </div>
</template>
<script>
    import menuFooter from '../../components/menu-footer.vue'
    export default {
      components: {
        menuFooter
      },
      data: function() {
          return {
              text: 'hello'
          }
      },
      mounted () {
      }
    }
</script>
