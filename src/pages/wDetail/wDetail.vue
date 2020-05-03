<template>
  <div>
    <detail-header :title="title"></detail-header>
  </div>
</template>
<script>
import DetailHeader from './components/Header'

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
    DetailHeader
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
      })
    }
  }
}
</script>
<style lang="stylus" scoped></style>
