<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon" @click="back">&#xe624;</div></div>
      <div class="header-title">个人中心</div>
      <router-link tag="div" to="/login" class="header-right">登录</router-link>
    </div>
    <div class="main">
      <div class="title">
        <p>您处于未登录状态，请尽快登录(仅展示)！</p>
      </div>
      <div class="content">
        <ul>
          <p class="ultitle">登录可以:</p>
          <li>订单信息同步云端，安全跨平台</li>
          <li>支持常用乘机人/联系人功能，填写订单更快捷</li>
          <li>支持购买团购，出行住店更方便</li>
        </ul>
      </div>
      <div class="order" v-for="item of orderList" :key="item.id">
        <div class="item">{{item.name}}</div>
      </div>
    </div>
    <div class="footer">
     <Home-Copyright></Home-Copyright>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '../../common/api'
import HomeCopyright from '../home/components/Copyright'
export default {
  name: 'User',
  data () {
    return {
      tabIndex: 0,
      orderList: null
    }
  },
  created () {
    this.getOrderList()
  },
  components: {
    HomeCopyright
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    changeIndex (index) {
      this.tabIndex = index
    },
    getOrderList () {
      axios.get(url.indexOrder).then(res => {
        this.orderList = res.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-left >>> .router .back-icon
  text-align center
  font-size .4rem
  color #fff
.app
  position relative
  background #eee
  .header
    display flex
    height .8rem
    background #18a9b9
    color #fff
    .header-left
      width .64rem
      line-height 0.75rem
      float left
      margin-left .2rem
    .header-title
      line-height .8rem
      color: #fff;
      margin 0 auto
      font-size: .32rem;
    .header-right
      width 1.24rem
      float right
      line-height 0.75rem
      text-align center
      cursor: pointer;
      color: #fff
  .main
    .title
      padding .5rem
      text-align center
    .content .ultitle
      color #aaa
      padding .1rem
    .content ul li
      list-style circle
      list-style-type square
      margin-left .5rem
      line-height .46rem
      color #aaa
    .order
      color #000
      border-top 1px solid #cccccc
      padding .3rem
      background #fff
  .footer
    margin-top .6rem
    border-top 1px solid #ccc
</style>
