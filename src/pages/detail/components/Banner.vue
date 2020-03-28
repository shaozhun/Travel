<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_600x330_5b0eb229.jpg">
      <div class="banner-info">
        <div class="banner-title">南沙百万葵园</div>
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe63e;</span>82</div>
      </div>
    </div>
    <Common-Fade>
      <Common-Gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></Common-Gallary>
    </Common-Fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFade from 'common/fade/Fade'
export default {
  name: 'Banner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1702/78/784db65a941116cfa3.img.jpg_r_800x800_a4c0f03a.jpg',
        'http://img1.qunarzz.com/sight/p0/1702/9f/9faf267f81a1a024a3.img.jpg_r_800x800_b7c27ffc.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary, CommonFade
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left .2rem
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
  .banner-title
    flex 1
    font-size .3rem
  .banner-num
    margin-top .1rem
    padding 0 .4rem
    line-height .4rem
    height .32rem
    font-size .24rem
    border-radius .2rem
    background rgba(0, 0, 0, .8)
    .banner-icon
      font-size .24rem
</style>
