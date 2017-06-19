<style lang="less" scoped>
  .modal-mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0,0,0, .3);
    z-index: 500;
    transition: opacity .3s ease;
  }
  .modal-container{
    padding: 10px;
    background-color: #fff;
    width: 80%;
    border-radius: 4px;
    transition: all .3s ease;
  }
  .modal-title{
    font-size: 14px;
  }
  .modal-content{
    margin-top: 15px;
    input{
      display: block;
      width: 100%;
      line-height: 2;
      border-bottom: 1px solid #eee;
    }
  }
  .modal-footer{
    text-align: right;
    margin-top: 10px;
    a {
      display: inline-block;
      padding: 10px;
    }
  }
  .modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
<transition name="modal">
  <div class="modal-mask" @click="$emit('close')">
    <div class="modal-container" @click.stop>
      <div class="modal-title">
        请输入饼干
      </div>
      <div class="modal-content"><input placeholder="请输入饼干" v-model.trim="cookie"/></div>
      <div class="modal-footer">
        <a href="#" class="submit" @click.prevent="submit">确定</a>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      cookie: ''
    }
  },
  methods: {
    submit() {
      if(this.cookie === '') {
        this.$store.dispatch('toast', '请输入饼干');
        return ;
      }
      this.$store.dispatch('addCookie', this.cookie)
        .then(()=> {
          this.$emit('close');
          this.$store.dispatch('toast', '饼干添加成功');
        }, ()=> {
          this.$store.dispatch('toast', '饼干已存在');
        })
    }
  }
}
</script>

