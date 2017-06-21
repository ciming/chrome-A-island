<style lang="less">
.rrs-list{
  padding: 10px 10px 45px ;
}
</style>

<template>
    <div class="page">
      <my-header title="订阅列表">  </my-header>
      <div class="rrs-list">
        <rrs-item v-for="(item,index) in rrs" :info="item" :index="index"></rrs-item>
      </div>
      <menu-footer></menu-footer>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import menuFooter from '../../components/menu-footer.vue'
  import MyHeader from '../../components/my-header.vue'
  import rrsItem from './rrsItem.vue'
  export default {
    components: {
      menuFooter,
      MyHeader,
      rrsItem
    },
    computed: {
      ...mapGetters({
        rrs: 'getRRS'
      })
    },
    data: function() {
        return {
            text: 'hello'
        }
    },
    created () {
      this.$store.dispatch('getRRS');
    }
  }
</script>
