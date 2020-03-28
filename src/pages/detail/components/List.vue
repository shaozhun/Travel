<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <Detail-List :list="item.children"></Detail-List>
      </div>
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
  left .2rem
  top .06rem
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
.item-title
  font-size .32rem
  padding 0 .2rem
  line-height .8rem
.item-children
  padding 0 .2rem
  .item-title-icon
    display none
</style>
