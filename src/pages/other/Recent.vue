<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon" @click="back">&#xe624;</div></div>
      <div class="header-title">最近浏览</div>
    </div>
    <div class="main">
      <div class="tab">
        <div class="tab-item" :class="{active:tabIndex===0}" @click="changeIndex(0)">火车票</div>
        <div class="tab-item" :class="{active:tabIndex===1}" @click="changeIndex(1)">机票</div>
        <div class="tab-item" :class="{active:tabIndex===2}" @click="changeIndex(2)">酒店</div>
      </div>
      <div class="content" v-show="tabIndex===0"><p>您最近还没有火车票浏览记录！</p></div>
      <div class="content" v-show="tabIndex===1"><p>您最近还没有机票浏览记录！</p></div>
      <div class="content" v-show="tabIndex===2"><p>您最近还没有酒店浏览记录！</p></div>
    </div>
    <div class="footer">
      <Home-Copyright></Home-Copyright>
    </div>
  </div>
</template>

<script>
import HomeCopyright from '../home/components/Copyright'
export default {
  name: 'Recent',
  data () {
    return {
      tabIndex: 0
    }
  },
  created () {

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
  height 100vh
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
  .footer
    width 100%
    position absolute
    bottom 2.46rem
    border-top 1px solid #ccc
  .tab
    top 0.75rem
    left 0
    right 0
    bottom 0
    margin 0 auto
    width 100%
    height .64rem
    color #000
    .tab-item
      width 3%
      line-height: .65rem;
      font-size: .16rem;
      display: table-cell;
      text-align: center
      border 1px solid #bbb
      background-color #ccc
    .active
      border none
      background #fff
  .content
    margin-top 3rem
    text-align center
</style>
