<template>
  <div>
    <Detail-Banner :banner_url="banner_url"
                   :banner_title="banner_title"
                   :img_num="img_num"></Detail-Banner>
    <Detail-Header></Detail-Header>
    <div class="content">
      <div class="add"><img class="title-heart" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">{{add}}</div>
      <Detail-List :list="list"></Detail-List>
      <Detail-Recommend></Detail-Recommend>
      <Home-Footer></Home-Footer>
      <Home-Copyright></Home-Copyright>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailRecommend from './components/Recommend'
import HomeFooter from '../home/components/Footer'
import HomeCopyright from '../home/components/Copyright'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner, DetailHeader, DetailList, DetailRecommend, HomeFooter, HomeCopyright
  },
  data () {
    return {
      id: '',
      banner_url: '',
      banner_title: '',
      img_num: '',
      add: '',
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
    this.id = id
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      let formData = new FormData()
      formData.append('id', this.id)
      axios.post('http://101.37.204.199/api/detailById.php', formData)
        .then(res => {
          this.banner_url = res.data[0].banner_url
          this.banner_title = res.data[0].title
          this.img_num = res.data[0].imgnum
          this.add = res.data[0].address
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.add
  padding .35rem
  background #ffffff
  border-radius .2rem
  .title-heart
    width: .3rem
    height: .3rem
    margin-left: .2rem
    padding-right .1rem
</style>
