<template>
  <div>
    <div class="title"><p>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</P></div>
    <div class="navUrl border-bottom">
      <router-link to="/login"><a>登录</a></router-link>
      <router-link to="/user"> <a>我的订单</a></router-link>
     <router-link to="/recent"> <a>最近浏览</a></router-link>
      <router-link to="/about"><a>关于我们</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
.title
  margin-top  .2rem
  line-height .4rem
  padding .2rem .3rem
  background #fff
.navUrl
  margin-top  .2rem
  line-height .8rem
  background #eee
  border-bottom 1px solid #cacaca
.navUrl a
  padding-left .32rem
</style>
