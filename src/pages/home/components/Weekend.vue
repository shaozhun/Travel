<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="img-wrapper"><img class="itemImg" :src="item.imgUrl"></div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '南沙百万葵园',
        desc: '记录唯美爱情，拍摄婚纱的好去处'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/fe/208e0360d686b8.jpg_r_640x214_7b9e6607.jpg',
        title: '香草世界',
        desc: '香草世界,香草世界'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
.title
  margin-top  .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.img-wrapper
  overflow hidden
  heigth: 0
  paddung-bottom 33.9%
.itemImg
  width 100%
.item-info
  min-width 0
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #616161
    ellipsis()
</style>
