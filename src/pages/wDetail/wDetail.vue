<template>
  <div>
    <detail-header :title="title"></detail-header>
    <Detail-Main></Detail-Main>
  </div>
</template>
<script>
import DetailHeader from './components/Header'
import DetailMain from './components/Main'

import axios from 'axios'
import url from '../../common/api'
export default {
  name: 'wDetail',
  data () {
    return {
      title: ''
    }
  },
  components: {
    DetailHeader, DetailMain
  },
  mounted () {
    this.getTitle()
  },
  methods: {
    getTitle () {
      var formData = new FormData()
      formData.append('id', this.$route.params.id)
      axios.post(url.weenkendTitle, formData).then(res => {
        this.title = res.data[0].title
        console.log(this.title)
      })
    }
  },
  watch: {
    // 利用watch方法检测路由变化：
    '$route': function (to, from) {
      // 拿到目标参数 to.query.id 去再次请求数据接口
      this.getTitle()
    }
  }
}
</script>
<style lang="stylus" scoped></style>
