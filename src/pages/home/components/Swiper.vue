<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="list of swiperList" :key="list.id">
        <img class="swiper-img" :src="list.imgUrl" />
      </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_600x330_5b0eb229.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_600x330_acaaf06b.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2001/8b/8b7ddfe2e27d929fa3.water.jpg_600x330_302676ff.jpg'
      }]
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
