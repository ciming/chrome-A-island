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
      <no-list  v-if="rrs.length===0">请点击订阅，会同步到列表</no-list>
      <menu-footer></menu-footer>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import noList from '../../components/no-list.vue'
  import menuFooter from '../../components/menu-footer.vue'
  import MyHeader from '../../components/my-header.vue'
  import rrsItem from './rrsItem.vue'
  export default {
    components: {
      menuFooter,
      MyHeader,
      rrsItem,
      noList
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
