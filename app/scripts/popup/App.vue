<template>
    <div id="app">
        <router-view class="page"></router-view>
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
    </div>

</template>
<script>
  export default{
    created () {
      this.init();
    },
    methods: {
      init(){
        this.$store.dispatch('getUser');
      }
    }
  }
</script>
<style  lang="less">
  *,::after,::before {
      box-sizing: inherit;
      -webkit-tap-highlight-color: transparent
  }

  html {
      box-sizing: border-box;
      background-color: #f4f4f4;
      color: #333;
      font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
      line-height: 1.2;
      user-select: none;
      -webkit-font-smoothing: antialiased;
      touch-action: manipulation;
      text-size-adjust: none
  }

  body,button,dd,dl,ol,ul {
      margin: 0;
      padding: 0
  }

  ol,ul {
      list-style: none
  }

  a {
      outline: 0;
      color: inherit;
      text-decoration: none
  }

  a,img {
      -webkit-touch-callout: none
  }

  button,input,select,textarea {
      outline: 0;
      border: none;
      font-size: inherit;
      font-family: inherit
  }

  h1,h2,h3,h4,h5,h6,p {
      margin: 0;
      font-weight: 400
  }

  img {
      max-width: 100%
  }

  textarea {
      resize: none
  }

  select {
      background-color: transparent;
      appearance: none
  }

  input[type=button],input[type=reset],input[type=submit] {
      appearance: button
  }

  input:-webkit-autofill {
      box-shadow: 0 0 0 100px #fff inset
  }

  .shellAnimation {
      animation: shellPulse 1s infinite
  }

  @keyframes shellPulse {
      0% {
          opacity: 1
      }

      50% {
          opacity: .6
      }

      100% {
          opacity: 1
      }
  }
  #app{
    display: flex;
    flex-direction: column;
    .page{
      flex: 1;
    }
  }

  footer{
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
