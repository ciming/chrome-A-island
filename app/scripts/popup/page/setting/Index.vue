<template>
  <div class="page-setting">
    <router-link :to="{name: 'cookie'}" class="cell">
     <div class="c-title">
       <h2>饼干管理</h2>
      </div>
      <div class='a-right'>
        <svg>
          <use xlink:href="#arrow-right"></use>
        </svg>
      </div>
    </router-link>
     <router-link :to="{name: 'rrs'}" class="cell">
     <div class="c-title">
       <h2>订阅管理</h2>
      </div>
      <div class='a-right'>
        <svg>
          <use xlink:href="#arrow-right"></use>
        </svg>
      </div>
    </router-link>
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

<style lang="less">
.cell{
  display: flex;
  align-items: center;
  padding:10px 15px ;
  border-bottom: 1px solid #f0f0f0;
  transition:all .3s ;
  .c-title{
    flex: 1;
    h2{
      font-size: 16px;
    }
    p {
      font-family: 14px;
      margin-top:5px;
      color: #666;
    }
  }
  .a-right{
    svg{
      width: 24px;
      height: 24px;
    }
  }
  &:hover{
    background: #f0f0f0
  }
}
</style>

