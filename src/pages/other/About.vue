<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon" @click="back">&#xe624;</div></div>
      <div class="header-title">关于我们</div>
      <router-link tag="div" to="/" class="header-right">首页</router-link>
    </div>
    <div class="main">
      <div class="mainInfo">
        <p>去哪儿网（Qunar.com）是中国领先的无线和在线旅游平台，网站上线于2005年5月，公司总部位于北京。去哪儿网通过网站及移动客户端的全平台覆盖，随时随地为旅行者提供国内外机票、酒店、度假、旅游团购、及旅行信息的深度搜索，帮助旅行者找到优质产品和信息，聪明地安排旅行。去哪儿网凭借其便捷、先进的智能搜索技术对互联网上的旅行信息进行整合，为用户提供实时、可靠、全面的旅游产品查询和信息比较服务。</p>
        <p>根据2011年12月艾瑞监测数据，在旅行类网站月度访问次数统计中，去哪儿网以超过7460万人次高居榜首。截至2012年6月底，去哪儿网实时搜索超过400家机票和酒店代理商网站，搜索范围覆盖全球范围内超过140,000家酒店、57,000条机票航线、180,000条度假线路、超过8,500个旅游景点、超过百万份游记攻略，并且每日提供逾1860种旅游团购产品。去哪儿网移动客户端“去哪儿旅行”是中国旅行类较受欢迎的移动应用，其拥有超过1180万用户的激活量，并在苹果中国App Store公布的“App Store Rewind 2011”中荣膺中国原创旅行类应用之冠。</p>
      </div>
    </div>
    <div class="help">
      <p class="info">如果您需要任何帮助，请拨打咨询电话：</p>
    </div>
    <div class="helpbutton">
      <div class="helpphone"><a href="tel:95117" class="num">95117</a></div>
    </div>
    <div class="footer">
      <Home-Copyright></Home-Copyright>
    </div>
  </div>
</template>

<script>
import HomeCopyright from '../home/components/Copyright'
export default {
  name: 'About',
  data () {
    return {
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
      width 2rem
      line-height .8rem
      margin 0 auto
      text-align center
      color: #fff;
      font-size: .32rem;
    .header-right
      width 1.24rem
      float right
      line-height 0.75rem
      text-align center
      cursor pointer
  .main
    .mainInfo
      text-indent 2em
      padding .2rem
      line-height .4rem
      font-size 14px
  .help
    .info
      margin-left .1rem
      color #ccc
  .helpbutton
    margin-top .1rem
    text-align center
    .helpphone
      padding .25rem
      width 90%
      margin 0 auto
      background -webkit-gradient(linear,0% 0,0% 100%,from(#fefefe),to(#e0e0e0))
      .num
        color black
        font-size 16px
  .footer
    width 100%
    position absolute
    bottom 2.46rem
    border-top 1px solid #ccc
</style>
