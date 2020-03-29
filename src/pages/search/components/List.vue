<template>
 <div>
    <div class="title">热门搜索</div>
    <div class="content">
      <div class="firstitem"><span class="item">长隆野生动物世界</span>
      <span class="item">白水寨</span></div>
      <div class="seconditem">
      <span class="item">香港迪士尼乐园</span>
      <span class="item">珠海长隆海洋王国</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchList'
}
</script>
<style lang="stylus" scoped>
.title
  color: #bbc
  font-size: 12px
  margin .3rem .2rem
.content
  color #000
  height 2rem
  border-top 1px solid #ddd
  border-bottom 1px solid #ddd
  .firstitem
    line-height 1rem
    text-align center
  .seconditem
    line-height 1rem
    text-align center
</style>
