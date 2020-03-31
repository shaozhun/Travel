<template>
  <div>
    <div class="item">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{list[0].title}}
      </div>
      <div class="item-children" v-for="(item,index) of list[0].children" :key="index">
        <div>
         <span class="title">{{item.title}}</span>
         <span class="price"> <span class="inner">¥</span>{{item.price}}<span class="start">起</span></span>
        </div>
      </div>
      <!-- <div v-if="item.children" class="item-children">
        <Detail-List :list="item.children"></Detail-List>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.item-title-icon
  position relative
  left 0
  top .06rem
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  background-size: .4rem 3rem;
.item-title
  font-size .32rem
  padding 0 .2rem
  line-height .8rem
.item-children
  padding .3rem .2rem
  line-height .2rem
  height .2rem
  background #fff
  .title
    float left
  .price
    float right
    color #ff9800
    font-size .36rem
    .inner
      font-size .2rem
    .start
      font-size .2rem
      color #9e9e9e
</style>
