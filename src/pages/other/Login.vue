<template>
  <div class="app">
    <div class="header">
      <div class="header-left"><router-link to="/" class="router"><div class="iconfont back-icon">&#xe624;</div></router-link></div>
      <div class="header-title">登录</div>
      <div class="header-right">注册</div>
    </div>
    <div class="tab">
      <div class="tab-item" @click="messageClick" :class="{cur:tabIndex===0}">短信验证码登录</div>
      <div class="tab-item" @click="accountClick" :class="{cur:tabIndex===1}">账号登录</div>
    </div>
    <div class="main" v-show="tabIndex===0">
      <input type="text" placeholder="请输入手机号">
      <input type="text" placeholder="请输入验证码">
    </div>
    <div class="main" v-show="tabIndex===1">
      <input type="text" placeholder="手机号/邮箱/用户名">
      <input type="text" placeholder="请输入密码">
    </div>
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
  .header
    display flex
    height 1.5rem
    background #18a9b9
    color #fff
    .header-left
      width .64rem
      line-height 0.75rem
      float left
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
</style>
