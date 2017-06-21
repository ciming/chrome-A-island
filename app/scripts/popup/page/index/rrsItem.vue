<style lang="less">
  .chuan{
    display: block;
    padding: 10px;
    background: #fff;
    margin-bottom: 10px;
    cursor: pointer;
    &:last-child{
      margin-bottom: 0;
    }
    .chuan-content{
      display: flex;
      .p-pic{
        max-width: 60px;
        height: 60px;
        margin-right: 10px;
        img{
          max-height: 100%;
          max-width: 100%;
        }
      }
      .p-text{
        flex: 1;
      }
    }
    .chuan-top{
      display: flex;
      justify-content: space-between;
      svg{
        width: 16px;
        height: 16px;
        cursor: pointer;
        fill: #666;
        &:hover{
          fill: lighten(#666, 10%);
        }
      }
    }
  }
</style>

<template>
  <div class="chuan" @click='jump'>
    <div class="chuan-top">
      <span>{{info.createdat}}</span>
      <span>
        <svg @click.stop="remove">
          <use xlink:href="#close"></use>
        </svg>
      </span>
    </div>
    <div class="chuan-content">
      <div class="p-pic" v-if="info.pic"><img :src="info.pic"></div>
      <div class="p-text">{{info.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['info', 'index'],
    methods: {
      jump () {
        this.checkActive()
          .then((tabId)=>{
            if(tabId) {
              chrome.tabs.update(tabId, {url:'https://h.nimingban.com/t/'+ this.info.id });
            } else {
              chrome.tabs.create({url:'https://h.nimingban.com/t/'+ this.info.id });
            }
          })
      },
      checkActive () {
        return new Promise((resolve, reject)=> {
          chrome.tabs.query (
            { currentWindow: true, active: true },
            (tabs) => {
                var activeTab = tabs[0];
                if(activeTab.url) {
                  resolve(activeTab.id)
                } else {
                  resolve(false)
                }
          });
        })

      },
      remove () {
        this.$store.commit('deleteRRS', this.index);
      }
    }
  }
</script>
