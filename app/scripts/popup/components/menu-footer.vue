<template>
   <footer>
      <router-link :to="{name:'index'}">
        <svg>
          <use xlink:href="#rrs"></use>
        </svg>
      </router-link>
        <router-link :to="{name:'setting'}">
        <svg>
          <use xlink:href="#setting"></use>
        </svg>
      </router-link>
  </footer>
</template>

<style lang="less">
  footer{
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 45px;
    background-color: #f0f0f0;
    display: flex;
    a{
      flex:1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      svg{
        width: 30px;
        height: 30px;
        fill: #000;
      }
    }
  }
</style>
