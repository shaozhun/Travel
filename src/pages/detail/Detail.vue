<template>
  <div>
    <Detail-Banner :banner_url="banner_url"
                   :banner_title="banner_title"
                   :img_num="img_num"
                   :bannerlist="bannerlist"></Detail-Banner>
    <Detail-Header></Detail-Header>
    <div class="content">
      <div class="add"><img class="title-heart" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">{{add}}</div>
      <Detail-List :list="list"></Detail-List>
      <Detail-Recommend @changeid="changeid"></Detail-Recommend>
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
      bannerlist: [],
      list: [{
        title: '门票',
        children: [{
          title: '全票【周末/节假日】',
          price: '324'
        }, {
          title: '半价票【周末/节假日】',
          price: '162'
        }]
      }]
    }
  },
  created () {
    this.getDetailInfo()
    this.getDetailBanner()
  },
  methods: {
    getDetailInfo () {
      let id = this.$route.path
      id = id.substring(8)
      this.id = id
      let formData = new FormData()
      formData.append('id', this.id)
      axios.post('http://travel.soaz.xyz/api/detailById.php', formData)
        .then(res => {
          this.banner_url = res.data[0].banner_url
          this.banner_title = res.data[0].title
          this.img_num = res.data[0].imgnum
          this.add = res.data[0].address
        })
    },
    getDetailBanner () {
      let detailId = this.$route.path
      detailId = detailId.substring(8)
      let formData = new FormData()
      formData.append('id', detailId)
      axios.post('http://travel.soaz.xyz/api/detailswiperById.php', formData)
        .then(res => {
          this.bannerlist = res.data
        })
    },
    changeid () {
      this.getDetailInfo()
      this.getDetailBanner()
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
