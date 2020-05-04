<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon" @click="back">&#xe624;</div></div>
      <div class="header-title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wDetail',
  props: {
    title: String
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-left >>> .router .back-icon
  text-align center
  font-size .4rem
  color #fff
.border-bottom::before
 border-bottom 1px solid #000
.border-topbottom::before
 border-top 1px solid #000
.border-topbottom::after
 border-bottom 1px solid #000
.app
  position relative
  .header
    display flex
    height .9rem
    align-items center
    background #00bcd4
    color #fff
    .header-left
      width .64rem
      line-height 0.75rem
      float left
      margin-left .2rem
    .header-title
      fixed 1
      line-height 0.75rem
      margin 0 auto
      color: #fff;
      font-size: .30rem;
      padding-right .4rem
</style>
