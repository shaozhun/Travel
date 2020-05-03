<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon" @click="back">&#xe624;</div></div>
      <div class="header-title">长沙必打卡</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wDetail',
  data () {
    return {
    }
  },
  created () {

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
  height 100vh
  .header
    display flex
    height 1rem
    align-items center
    background #18a9b9
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
