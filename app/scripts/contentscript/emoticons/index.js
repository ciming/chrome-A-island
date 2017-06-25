import app from './app.vue'
import Vue from 'vue'
import $ from 'jquery'

export default (function() {
    $(function() {
        let Emoticons = Vue.extend(app);
        let vm = new Emoticons().$mount();
        $("#h-emot-select").after(vm.$el);
    })
})()