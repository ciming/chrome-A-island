<template>
  <div class="page-cookie">
    <my-header title="饼干管理">
      <button @click="modalVisable = true">
        <svg>
          <use xlink:href="#add"></use>
        </svg>
      </button>
    </my-header>
    <cookie-add v-if="modalVisable" @close="modalVisable = false"></cookie-add>
  </div>
</template>

<script>
import CookieAdd from '../components/cookie-add.vue'
import MyHeader from '../components/my-header.vue'
export default {
  components:{
    MyHeader,
    CookieAdd
  },
  data() {
    return {
      modalVisable: false
    }
  }
}
</script>

<style>

</style>

