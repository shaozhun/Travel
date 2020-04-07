<template>
  <div class="hotlist">
     <div class="title"><img class="title-heart" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">本周热门榜单</div>
    <div class="scroll_box">
        <router-link tag="span" :to="`/detail/`+item.id" class="box" v-for="item in hotList" :key="item.id">
        <img class="mp-hotsale-tagimg" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png" :alt="item.title" v-show="item.id == 1">
        <img class="mp-hotsale-tagimg" src="http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png" :alt="item.title" v-show="item.id == 2">
        <img class="mp-hotsale-tagimg" src="http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png" :alt="item.title" v-show="item.id == 3">
          <img class="box-img" :src="item.url" >
          <span class="box-title">{{item.title}}</span>
          <span class="box-price">¥{{item.price}}<span class="price-inner">起</span></span>
        </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HotList',
  data () {
    return {
      hotList: null
    }
  },
  created () {
    this.getHotList()
  },
  methods: {
    getHotList () {
      axios.get('http://travel.soaz.xyz/api/indexHotData.php').then(res => {
        this.hotList = res.data
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'
.hotlist
  margin .2rem 0 .05rem 0
  background-color #eee
  .title
    height .7rem
    line-height .8rem
    background #eee
    text-indent .2rem
    .title-heart
      width: .3rem
      height: .3rem
      margin-left: .2rem
      margin-top -.12rem
      padding-right .1rem
  .scroll_box
    max-width: 200%
    height 3rem
    padding-bottom: .3rem
    padding-left .2rem
    padding-right .2rem
    overflow-x: auto
    white-space: nowrap
    overflow-y: hidden
    .box
      position relative
    .mp-hotsale-tagimg
      position: absolute
      top: -.81rem
      left: 0
      width: .8rem
      height: 0.35rem
      background-size: 100%
      color: #fff
      font-size: 0.2rem
      line-height: 0.38rem
      text-indent: 0.04rem
    .box-img
      width 100px
      height 100px
      padding .02rem
    .box-title
      position absolute
      height 0.9rem
      line-height 0.9rem
      text-align center
      overflow hidden
      width 100px
      top 1rem
      left 0
      bottom 0
      right 0
      ellipsis()
    .box-price
      position absolute
      height 0.9rem
      overflow hidden
      color #ff8300
      text-align center
      width 100px
      top 1.8rem
      left 0
      bottom 0
      right 0
      .price-inner
        color #616161
</style>
