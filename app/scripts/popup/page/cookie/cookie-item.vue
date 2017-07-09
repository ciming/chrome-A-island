<template>
  <div class="cookie-item" :class="{current:cookie.hash===user.cookie}">
    <a href="#" @click.prevent="select(cookie.hash)" class="p-name">{{cookie.name}}</a>
    <a href="#" @click.prevent="delCookie(index)">
      <svg>
        <use xlink:href="#close"></use>
      </svg>
    </a>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['cookie', 'index'],
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    cookieId() {
      return this.cookie
    }
  },
  methods: {
    select (hash) {
      this.$store.dispatch('changeCookie', hash);
    },
    delCookie(index) {
      this.$store.dispatch('delCookie', index);
      this.$store.dispatch('toast', '删除成功');

    }
  }
}
</script>

<style lang="less" scoped>
  .cookie-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    .p-name{
      flex: 1;
      line-height: 21px;
      color: #b1b1b1;
    }
    a {
      display: block;
       svg{
        width: 18px;
        height: 18px;
        fill: #81ccca
      }
      &:hover{
        svg{
          fill: darken(#81ccca, 10%)
        }
      }
    }
    &.current{
      .p-name{
        font-weight: bold;
        color: #333
      }
    }
  }
</style>


