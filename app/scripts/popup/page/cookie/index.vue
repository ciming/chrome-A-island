<template>
  <div class="page-cookie">
    <my-header title="饼干管理">
      <button @click="modalVisable = true">
        <svg>
          <use xlink:href="#add"></use>
        </svg>
      </button>
    </my-header>
    <div class="cookies-list" >
      <cookie-item
        v-for="(item,index) in cookies.list"
        :cookie="item"
        ></cookie-item>
    </div>
    <cookie-add v-if="modalVisable" @close="modalVisable = false"></cookie-add>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CookieAdd from './cookie-add.vue'
import CookieItem from './cookie-item.vue'
import MyHeader from '../../components/my-header.vue'
export default {
  components:{
    MyHeader,
    CookieAdd,
    CookieItem
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

