<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city"><div class="header-right">{{this.$store.state.city}}<span class="iconfont array-icon">&#xe615;</span></div></router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
  display flex
  line-height .86rem
  background $bgClolor
  color #fff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    height .64rem
    background #ffffff
    border-radius .1rem
    margin-top .12rem
    margin-left .2rem
    line-height .64rem
    color #ccc
    padding-left .2rem
  .header-right
    width 1.24rem
    float right
    text-align center
    color #fff
    .array-icon
      font-size .24rem
</style>
