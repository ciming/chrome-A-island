<template>
  <div class="page-cookie">
    <my-header title="饼干管理">
      <button @click="modalVisable = true">
        <svg>
          <use xlink:href="#add"></use>
        </svg>
      </button>
    </my-header>
    <div class="cookies-list" v-if= "cookies.loaded&&cookies.list.length>0">
      <cookie-item
        v-for="(item,index) in cookies.list"
        :cookie="item"
        ></cookie-item>
    </div>
    <no-list  v-if="cookies.loaded&&cookies.list.length===0">没有饼干</no-list>
    <cookie-add v-if="modalVisable" @close="modalVisable = false"></cookie-add>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CookieAdd from './cookie-add.vue'
import CookieItem from './cookie-item.vue'
import MyHeader from '../../components/my-header.vue'
import noList from '../../components/no-list.vue'
export default {
  components:{
    MyHeader,
    CookieAdd,
    CookieItem,
    noList
  },
  computed: {
    ...mapGetters({
      cookies: 'getCookies'
    })
  },
  data() {
    return {
      modalVisable: false
    }
  },
  created () {
    this.$store.dispatch('getCookieList')
  }
}
</script>

<style>

</style>

