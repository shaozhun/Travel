<template>
  <div>
    <div class="title"><img class="title-heart" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">猜你喜欢</div>
    <ul>
      <router-link tag="li" to="/detail" class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="itemImg" :src="item.url">
        <div class="mp-like-tag" style="background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)" v-show="item.tomorrow == 1">可订明日</div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price">¥<span class="price">{{item.price}}</span>起 <span class="recomand">{{item.recommend}}条评论</span></p>
          <button class="item-button">查看详情</button><div class="city">{{item.city}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: null
    }
  },
  created () {
    this.getRecommendList()
  },
  methods: {
    getRecommendList () {
      axios.get('http://101.37.204.199/api/indexLikeData.php').then(res => {
        this.recommendList = res.data
      })
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
  .title-heart
    width: .3rem
    height: .3rem
    margin-left: .2rem
    padding-right .1rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .itemImg
    width 1.7rem
    height 1.7rem
    padding .1rem
  .mp-like-tag
    position: absolute
    top: .1rem
    left: .1rem
    width: 1.02rem
    height: .38rem
    background-size: 100%
    color: #fff
    font-size: .2rem
    line-height: .38rem
    text-indent: .04rem
  .item-info
    flex 1
    min-width 0
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-price
      margin-top: .22rem
      color: #616161
      font-size: .24rem
      line-height: .4rem
      color #ff8300
      .price
        font-size .4rem
      .recomand
        float right
        margin-right 1.3rem
        color #616161
    .item-button
      line-height .44rem
      margin-top .1rem
      color #fff
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
    .city
      line-height .44rem
      margin-top .1rem
      float right
</style>
