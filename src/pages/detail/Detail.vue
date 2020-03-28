<template>
  <div>
    <Detail-Banner></Detail-Banner>
    <Detail-Header></Detail-Header>
    <div class="content">
      <Detail-List :list="list"></Detail-List>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner, DetailHeader, DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆'
        }, {
          title: '成人五馆'
        }]
      }, {
        title: '学生票',
        children: [{
          title: '学生三馆'
        }, {
          title: '学生五馆'
        }]
      }, {
        title: '儿童票',
        children: [{
          title: '儿童三馆'
        }, {
          title: '儿童五馆'
        }]
      }, {
        title: '特惠票',
        children: [{
          title: '特惠三馆'
        }, {
          title: '特惠五馆'
        }]
      }]
    }
  },
  watch: {
    // 解决跳转到之前滚动位置的问题
    '$route': function () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
