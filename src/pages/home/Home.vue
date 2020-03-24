<template>
  <div>
    <div v-show="!windowShow">
      <Home-Header></Home-Header>
      <Home-Swiper></Home-Swiper>
      <Home-Icons></Home-Icons>
      <Home-Recommend></Home-Recommend>
      <Home-Weekend></Home-Weekend>
      <Home-Footer></Home-Footer>
    </div>
    <div class="erweicode"  v-show="windowShow">
      <p class="info">为了更好的预览体验，请您使用手机扫码预览</p>
      <img src="~style/code_http.png" alt="">
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      windowShow: false
    }
  },
  created () {
    var sUserAgent = navigator.userAgent.toLowerCase()
    var bIsCE = sUserAgent.match(/windows/i)
    if (bIsCE) {
      this.windowShow = true
      console.log('请扫码预览')
    }
  },
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend, HomeFooter
  }
}
</script>
<style lang="stylus" scoped>
.erweicode
  font-size 30px
  text-align center
  margin-top 5rem
  .info
    margin-bottom 2rem
</style>
