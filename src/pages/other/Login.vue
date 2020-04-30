<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon" @click="back">&#xe624;</div></div>
      <div class="header-title">登录</div>
      <router-link tag="div" to="/reg" class="header-right">注册</router-link>
    </div>
    <div class="tab">
      <div class="tab-item" @click="messageClick" :class="{cur:tabIndex===0}">短信验证码登录</div>
      <div class="tab-item" @click="accountClick" :class="{cur:tabIndex===1}">账号登录</div>
    </div>
    <div class="main" v-show="tabIndex===0">
      <div class="phone border-bottom firstRow">
        <div class="phoneinfo">手机号</div>
        <input class="phoneinput" type="text" placeholder="请输入手机号">
      </div>
       <div class="phone border-bottom">
        <div class="phoneinfo">验证码</div>
        <input class="phoneinput" type="text" placeholder="请输入验证码">
      </div>
      <div class="sign">
        <button class="signbutton">登录</button>
      </div>
    </div>
    <div class="main" v-show="tabIndex===1">
       <div class="phone border-bottom firstRow">
        <div class="phoneinfo">账号</div>
        <input class="phoneinput" type="text" placeholder="手机号/邮箱/用户名">
      </div>
       <div class="phone border-bottom">
        <div class="phoneinfo">密码</div>
        <input class="phoneinput" type="text" placeholder="请输入密码">
      </div>
      <div class="sign">
        <button class="signbutton">登录</button>
      </div>
    </div>
    <p class="info">登录即同意去哪儿<span class="underline">用户服务协议</span>和<span class="underline">隐私政策</span></p>
    <p class="info">此页面仅作展示，登录注册功能后续开放</p>
    <div class="footer">
      <div class="pc agent"><router-link to="/">电脑版</router-link></div>
      <div class="pc agent"><router-link to="/about">关于我们</router-link></div>
    </div>
    <div class="copyright">Qunar京ICP备05021087</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      tabIndex: 0
    }
  },
  created () {

  },
  methods: {
    messageClick () {
      this.tabIndex = 0
    },
    accountClick () {
      this.tabIndex = 1
    },
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
    height 1.5rem
    background #18a9b9
    color #fff
    .header-left
      width .64rem
      line-height 0.75rem
      float left
      margin-left .2rem
    .header-title
      width 1.24rem
      line-height 0.75rem
      margin 0 auto
      text-align center
      color: #fff;
      font-size: .38rem;
    .header-right
      width 1.24rem
      float right
      line-height 0.75rem
      text-align center
      cursor: pointer;
      color: #75ffff
      .array-icon
        font-size .24rem
  .tab
    position absolute
    top 0.75rem
    left 0
    right 0
    bottom 0
    margin 0 auto
    width 6rem
    height .64rem
    border .01rem solid #fff
    border-radius .03rem
    color #fff
    .tab-item
      width 3rem
      line-height: .65rem;
      font-size: .16rem;
      display: table-cell;
      text-align: center
    .cur
      background #fff
      color #18a9b9
  .footer
    position absolute
    bottom .8rem
    display flex
    flex-wrap wrap
    width 100%
    .agent
      width 50%
      text-align center
      line-height 1rem
      color #18a9b9
      border-bottom 1px solid #ccc
  .copyright
    position absolute
    width 100%
    bottom .3rem
    text-align center
    color #ccc
.phone
    display flex
    flex-wrap wrap
  .phoneinfo
    line-height 1rem
    color #18a9b9
    background #fff
    width 20%
    text-align center
  .phoneinput
    line-height 1rem
    width 80%
.firstRow
  margin-top .2rem
.sign
  margin-top .2rem
  text-align center
  .signbutton
    padding .2rem 3rem
    background #18a9b9
    border-radius .05rem
.info
  margin-top .5rem
  text-align center
  color #ccc
  .underline
    text-decoration underline
</style>
