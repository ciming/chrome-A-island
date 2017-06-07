<template>
  <div class="cookie-item" :class="{current:cookie.hash===user.cookie}">
    <div class="p-name">{{cookie.name}}</div>
    <a>
      <svg>
        <use xlink:href="#close"></use>
      </svg>
    </a>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['cookie'],
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    cookieId() {
      return this.cookie
    }
  }
}
</script>

<style lang="less" scoped>
  .cookie-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .p-name{
      flex: 1;
      line-height: 21px;
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
      }
    }
  }
</style>


