<template>
  <div>
    <Home-Header></Home-Header>
    <Home-Swiper></Home-Swiper>
    <Home-Icons></Home-Icons>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    HomeHeader, HomeSwiper, HomeIcons
  }
}
</script>
<style>

</style>
