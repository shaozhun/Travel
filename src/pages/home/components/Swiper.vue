<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="swiperList.length">
      <swiper-slide v-for="list of swiperList" :key="list.id">
        <img class="swiper-img" :src="list.url" />
      </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        loop: true
      },
      swiperList: []
    }
  },
  created () {
    this.getSwiperList()
  },
  methods: {
    getSwiperList () {
      axios.get('http://travel.soaz.xyz/api/indexSwiperData.php').then(res => {
        this.swiperList = res.data
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff !important
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
