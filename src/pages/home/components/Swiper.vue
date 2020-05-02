<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="swiperList.length">
      <swiper-slide v-for="list of swiperList" :key="list.id">
        <router-link tag="div" class="a"  :to="`/detail/`+list.id">
          <img class="swiper-img" :src="list.url" />
        </router-link>
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
        autoplay: 5000,
        initialSlide: 0,
        loop: true
      }
    }
  },
  created () {
  },
  props: {
    swiperList: Array
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}

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
