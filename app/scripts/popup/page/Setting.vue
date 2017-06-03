<template>
  <div class="page-setting">
    <router-link :to="{name: 'cookie'}" class="cell">
     <div class="c-title">
       <h2>饼干管理</h2>
       <p>理论上来说，您没有饼干</p>
      </div>
      <div class='a-right'>
        <svg>
          <use xlink:href="#arrow-right"></use>
        </svg>
      </div>
    </router-link>
  </div>
</template>
<script>
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
  &:active{
    background: #f0f0f0
  }
}
</style>

