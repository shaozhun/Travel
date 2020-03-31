<template>
  <div>
    <Detail-Banner :banner_url="banner_url"
                   :banner_title="banner_title"
                   :img_num="img_num"></Detail-Banner>
    <Detail-Header></Detail-Header>
    <div class="content">
      <Detail-List :list="list"></Detail-List>
      还没写详情呢啊 还没写呢~{{this.id}}
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner, DetailHeader, DetailList
  },
  data () {
    return {
      id: '',
      banner_url: '',
      banner_title: '',
      img_num: '',
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
  created () {
    let id = this.$route.path
    id = id.substring(8)
    console.log(id)
    this.id = id
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      this.a = 1
      let formData = new FormData()
      formData.append('id', this.id)
      axios.post('http://101.37.204.199/api/detailById.php', formData)
        .then(res => {
          this.banner_url = res.data[0].banner_url
          this.banner_title = res.data[0].title
          this.img_num = res.data[0].imgnum
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
