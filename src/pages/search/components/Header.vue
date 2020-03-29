<template>
<div>
  <div class="header">
      <router-link tag="div" to="/" class="header-left"><div class="iconfont back-icon">&#xe624;</div></router-link>
      <router-link to="/search" tag="div" class="header-input"><input  v-model="keyword" class="search-input" type="text" placeholder="输入城市或景点"></router-link>
      <div class="header-right"><div class="inner">搜索</div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
.header
  display flex
  line-height .86rem
  background #fff
  color #fff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .3rem
      color #111
  .header-input
    flex 1
    height .64rem
    margin-top .12rem
    color #bbb
    line-height .64rem
    padding-left .2rem
    .search-input
      height 100%
      width 100%
      margin-left .2rem
      background #f2f2f2
      border-radius .3rem
      line-height .64rem
      text-align center
  .header-right
    position relative
    width 1.24rem
    float right
    text-align center
    color #fff
    .inner
      margin-left .2rem
      width .85rem
      height .8rem
      color #111
      ellipsis()
</style>
