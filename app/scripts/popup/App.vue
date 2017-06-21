<template>
    <div id="app">
        <router-view class="page"></router-view>
         <transition-group name="toast" tag="div">
        <div class="vue-toast_container " v-for="item in toast" :key="item.id">
          <div class="vue-toast_message">
            <span>{{item.text}}</span> <!---->
          </div>
        </div>
      </transition-group>
    </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    created () {
      this.init();
    },
    computed: {
      ...mapGetters({
        toast: 'toast'
      })
    },
    methods: {
      init(){
        this.$store.dispatch('getUser');
      }
    }
  }
</script>
<style  lang="less">

</style>
