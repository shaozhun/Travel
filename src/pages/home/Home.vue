<template>
  <div>
    <Home-Header></Home-Header>
    <Home-Swiper></Home-Swiper>
    <Home-Icons></Home-Icons>
    <Home-Recommend></Home-Recommend>
    <Home-Weekend></Home-Weekend>
    <Home-Footer></Home-Footer>
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
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend, HomeFooter
  }
}
</script>
<style>

</style>
