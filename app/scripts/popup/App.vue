<template>
    <div id="app">

        <router-view></router-view>
        <footer>
            <a>
              <svg>
                <use xlink:href="#rrs"></use>
              </svg>
            </a>
            <a>
              <svg>
                <use xlink:href="#cookie"></use>
              </svg>
            </a>
             <a>
              <svg>
                <use xlink:href="#setting"></use>
              </svg>
            </a>
        </footer>
    </div>

</template>

<style scoped lang="less">
  footer{
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
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
