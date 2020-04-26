<template>
  <div>
    <div v-show="!windowShow" class="shaozhun">
      <Home-Header></Home-Header>
      <Home-Swiper :swiperList="swiperList"></Home-Swiper>
      <Home-Icons :iconList="iconList"></Home-Icons>
      <Home-HotList></Home-HotList>
      <Home-Recommend></Home-Recommend>
      <Home-Weekend></Home-Weekend>
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

import axios from 'axios'
import url from '../../common/api'
export default {
  name: 'Home',
  data () {
    return {
      windowShow: false,
      swiperList: [],
      iconList: []
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
    this.getSwiperList()
    // 获取ICON数据
    this.getIconList()
  },
  methods: {
    getSwiperList () {
      var formData = new FormData()
      formData.append('cityId', localStorage.cityId)
      axios.post(url.indexSwiperData, formData).then(res => {
        this.swiperList = res.data
      })
    },
    getIconList () {
      axios.get(url.indexIconData).then(res => {
        this.iconList = res.data
      })
    }
  },
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend, HomeFooter, HomeCopyright, HomeHotList
  },
  watch: {
    '$store.state.city': function () {
      this.getSwiperList()
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
