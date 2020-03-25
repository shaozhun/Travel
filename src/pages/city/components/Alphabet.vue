<template>
  <div class="list">
    <li class="item">A</li>
    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>
    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>

    <li class="item">A</li>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
   list-style none
   text-align center
   line-height .44rem
   color $bgClolor
</style>
