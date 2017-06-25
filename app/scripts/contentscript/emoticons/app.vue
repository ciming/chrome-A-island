<template>
  <div class="emoticons-wrapper" id="emoticons-wrapper" v-click-outside="close">
    <button class="choose-emoticons" type="button" @click="showBox">选择颜文字</button>
    <div class="emoticons-box" :class="[direction==='top'?'top':'bottom']" v-show="show" >
      <div class="inner">
        <a href="#" @click.prevent="addEmoticons(item)" class="item" v-for="(item, index) in emotList">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import ClickOutside from './click-outside.js'
export default {
  name: 'app',
  data() {
    return {
      emotList: ["|∀ﾟ", "(´ﾟДﾟ`)", "(;´Д`)", "(｀･ω･)", "(=ﾟωﾟ)=", "| ω・´)", "|-` )", "|д` )", "|ー` )", "|∀` )", "(つд⊂)", "(ﾟДﾟ≡ﾟДﾟ)", "(＾o＾)ﾉ", "(|||ﾟДﾟ)", "( ﾟ∀ﾟ)", "( ´∀`)", "(*´∀`)", "(*ﾟ∇ﾟ)", "(*ﾟーﾟ)", "(　ﾟ 3ﾟ)", "( ´ー`)", "( ・_ゝ・)", "( ´_ゝ`)", "(*´д`)", "(・ー・)", "(・∀・)", "(ゝ∀･)", "(〃∀〃)", "(*ﾟ∀ﾟ*)", "( ﾟ∀。)", "( `д´)", "(`ε´ )", "(`ヮ´ )", "σ`∀´)", " ﾟ∀ﾟ)σ", "ﾟ ∀ﾟ)ノ", "(╬ﾟдﾟ)", "(|||ﾟдﾟ)", "( ﾟдﾟ)", "Σ( ﾟдﾟ)", "( ;ﾟдﾟ)", "( ;´д`)", "(　д ) ﾟ ﾟ", "( ☉д⊙)", "(((　ﾟдﾟ)))", "( ` ・´)", "( ´д`)", "( -д-)", "(>д<)", "･ﾟ( ﾉд`ﾟ)", "( TдT)", "(￣∇￣)", "(￣3￣)", "(￣ｰ￣)", "(￣ . ￣)", "(￣皿￣)", "(￣艸￣)", "(￣︿￣)", "(￣︶￣)", "ヾ(´ωﾟ｀)", "(*´ω`*)", "(・ω・)", "( ´・ω)", "(｀・ω)", "(´・ω・`)", "(`・ω・´)", "( `_っ´)", "( `ー´)", "( ´_っ`)", "( ´ρ`)", "( ﾟωﾟ)", "(oﾟωﾟo)", "(　^ω^)", "(｡◕∀◕｡)", "/( ◕‿‿◕ )\\", "ヾ(´ε`ヾ)", "(ノﾟ∀ﾟ)ノ", "(σﾟдﾟ)σ", "(σﾟ∀ﾟ)σ", "|дﾟ )", "┃電柱┃", "ﾟ(つд`ﾟ)", "ﾟÅﾟ )　", "⊂彡☆))д`)", "⊂彡☆))д´)", "⊂彡☆))∀`)", "(´∀((☆ミつ"],
      direction: 'top',
      show: false
    }
  },
  methods: {
    test() {
      alert('1111')
    },
    showBox(){
      if(this.show) {
        this.show =false;
      } else {
        let topDistance = $("#emoticons-wrapper").position().top - $(window).scrollTop();
        this.direction = topDistance> 140? 'top': 'bottom';
        this.show =true;
      }
    },
    addEmoticons(content) {
      $('textarea').val($('textarea').val()+ content);
      this.show =false;
    },
    close() {
       this.show =false;
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

