<template>
  <div>
    <div class="title"><p>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</P></div>
    <div class="navUrl border-bottom">
      <router-link to="/login"><a>登录</a></router-link>
      <a href="http://touch.qunar.com/h5/user/usercenter">我的订单</a>
      <a href="http://touch.qunar.com/h5/recent">最近浏览</a>
      <a href="http://touch.qunar.com/h5/about">关于我们</a>
    </div>
    <div class="copyright">
      <a href="https://www.qunar.com/" class="black">触屏版</a>
      <a href="https://www.qunar.com/index.htm">电脑版</a>
      <p class="copyrightTitle">Qunar 京ICP备05021087 意见反馈</p></div>
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
.copyright
  background #f3f3f3
  color: #9e9e9e;
  padding .2rem
  text-align: center;
  font-size: 14px;
  .black
    color #000
  .copyrightTitle
    margin-top .1rem
</style>
