<template>
  <header>
    <div class="left">
       <button @click.prevent="goBack">
         <svg>
           <use xlink:href="#arrow-left"></use>
         </svg>
       </button>
    </div>

    <h2>{{title}}</h2>
    <div class="right">
      <slot></slot>
    </div>
  </header>
</template>
<script>
export default {
  props:['title'],
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less">
header{
  position: sticky;
  min-height: 48px;
  background-color: #eee;
  display: flex;
  align-items: center;
  h2{
    flex: 1;
    font-size: 16px;
  }
  .left,.right{
    width: 40px;
    height: 40px;
  }
   button{
     display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      background: transparent;
      svg{
        width: 24px;
        height: 24px;
      }
    }
}
</style>

