<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url" />
          </div>
          <p class="icon-desc">{{item.desct}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: false
      },
      iconList: null
    }
  },
  created () {
    this.getIconList()
  },
  methods: {
    getIconList () {
      axios.get('http://101.37.204.199/api/indexIconData.php').then(res => {
        this.iconList = res.data
      })
    }
  },
  computed: {
    pages () {
      if (this.iconList) {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/mixins.styl';
.icons >>> .swiper-pagination-bullet-active
  background-color rgba(0,175,190,.8) !important
.icons >>> .swiper-container
  position relative
  height: 0;
  padding-bottom: 52%;
.icons >>> .swiper-pagination-bullet
  width 6px
  height 6px
.icons >>> .swiper-pagination
  position absolute
  bottom -2px
.icons
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: 0.44rem
      line-height: 0.44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
