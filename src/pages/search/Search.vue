<template>
  <div>
    <Search-Header :searchitem="searchitem"></Search-Header>
    <Search-History @triggerItem="triggerItem"></Search-History>
    <Search-List :hotSearchList="hotSearchList"></Search-List>
  </div>
</template>
<script>
import SearchHeader from './components/Header'
import SearchList from './components/List'
import SearchHistory from './components/History'
import axios from 'axios'
import url from '../../common/api'
export default {
  name: 'Search',
  data () {
    return {
      hotSearchList: [],
      searchitem: ''
    }
  },
  mounted () {
    var formData = new FormData()
    formData.append('cityId', localStorage.cityId || '270')
    // 获取本周热门数据
    this.getHotList(formData)
  },
  components: {
    SearchHeader, SearchList, SearchHistory
  },
  methods: {
    getHotList (formData) {
      axios.post(url.indexHotData, formData).then(res => {
        this.hotSearchList = res.data
      })
    },
    triggerItem (item) {
      this.searchitem = item
    }
  }
}
</script>
<style lang="stylus" scoped></style>
