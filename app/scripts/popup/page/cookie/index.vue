<style lang="less" scoped>
.get-cookie{
  padding: 10px 20px;
  button{
    background-color: #81ccca;
    display: inline-block;
    font-size: 14px;
    color: #fff;
    font-weight: 300;
    line-height: 28px;
    padding: 6px 16px;
    text-decoration: none;
    white-space: nowrap;
  }
  .tip{
    margin-top: 10px;
    color: #666
  }
}
</style>

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
        :index="index"
        ></cookie-item>
    </div>
    <no-list  v-else>没有饼干</no-list>
    <div class="get-cookie">
      <button type="button" @click="clearCookie">获取新饼干</button>
      <div class="tip">
        点击后，重新发串，可以获取新饼干（前提是猴子开放饼干）
      </div>
    </div>

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
  },
  methods: {
    clearCookie() {
      chrome.cookies.remove({
        "url": "https://h.nimingban.com",
        "name": "userhash"
      }, (deleted_cookie)=> {
          this.$store.dispatch('toast', '本地饼干清除，请发串获取');
          this.$store.commit('updateCookie', '')
      })
    }
  }
}
</script>


