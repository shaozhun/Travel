<template>
  <div>
    <div v-show="!windowShow" class="shaozhun">
      <Home-Header></Home-Header>
      <Home-Swiper :swiperList="swiperList"></Home-Swiper>
      <Home-Icons :iconList="iconList"></Home-Icons>
      <Home-HotList :hotList="hotList"></Home-HotList>
      <Home-Recommend :recommendList="recommendList"></Home-Recommend>
      <Home-Weekend :weekendList="weekendList"></Home-Weekend>
      <Home-Footer></Home-Footer>
      <Home-Copyright></Home-Copyright>
    </div>
    <div class="erweicode" v-show="windowShow">
      <p class="info">为了更好的预览体验，请您使用手机扫码预览</p>
      <img src="~style/code_http.png" alt />
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeHotList from './components/HotList'
import HomeWeekend from './components/Weekend'
import HomeFooter from './components/Footer'
import HomeCopyright from './components/Copyright'
export default {
  name: 'Home',
  data () {
    return {
      windowShow: false,
      swiperList: [],
      iconList: [],
      weekendList: [],
      recommendList: [],
      hotList: []
    }
  },
  created () {
    var sUserAgent = navigator.userAgent.toLowerCase()
    var bIsCE = sUserAgent.match(/windows/i)
    if (bIsCE) {
      this.windowShow = true
    }
  },
  mounted () {
    // 在这里获取到数据返回给各组件
    // 获取swiper数据
    var formData = new FormData()
    formData.append('cityId', localStorage.cityId || '270')
    if (this.$store.state.cityId === '270' || this.$store.state.cityId === '264') {
      this.getHomeList(formData)
    } else {
      var a = confirm('请将城市选择长沙或者广州,其他城市没有数据！')
      if (a) {
        this.$router.push('/city')
      }
    }
  },
  methods: {
    getHomeList (formData) {
      this.$axios.post('homeList.php', formData).then(res => {
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
        this.hotList = res.data.data.hotList
        this.recommendList = res.data.data.likeList
        this.weekendList = res.data.data.weekendList
      })
    }
  },
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend, HomeFooter, HomeCopyright, HomeHotList
  },
  watch: {
    '$store.state.city': function () {
      location.reload()
    }
  }
}
</script>
<style lang="stylus" scoped>
.erweicode {
  font-size: 30px;
  text-align: center;
  margin-top: 5rem;

  .info {
    margin-bottom: 2rem;
  }
}
</style>
