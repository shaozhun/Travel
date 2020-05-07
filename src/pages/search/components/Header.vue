<template>
  <div>
    <div class="header">
      <router-link tag="div" to="/" class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      <router-link to="/search" tag="div" class="header-input">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市或景点(广州/长沙)" />
      </router-link>
      <div class="header-right">
        <div class="inner" @click="searchHandle()">搜索</div>
      </div>
    </div>
    <div class="search-content" ref="search" v-show="flag">
      <ul>
        <router-link
          v-show="list.length"
          tag="li"
          :to="`/detail/`+item.id"
          class="search-item border-bottom"
          v-for="(item,index) of list"
          :key="index"
        >
          <img class="liimg" :src="item.url" />
          {{item.title}}
        </router-link>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import url from '../../../common/api'
export default {
  name: 'SearchHeader',
  data () {
    return {
      keyword: '',
      timer: null,
      list: [],
      hasNoData: false,
      flag: false
    }
  },
  computed: {
    // hasNoData () {
    //   return !this.list.length
    // }
  },
  props: {
    searchitem: String
  },
  methods: {
    searchHandle (item) {
      if (item) {
        this.keyword = item
      }
      let historylist = JSON.parse(localStorage.getItem('history')) || []
      historylist.push(this.keyword)
      historylist = Array.from(new Set([...historylist]))
      localStorage.setItem('history', JSON.stringify(historylist))
      this.flag = true
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        var formData = new FormData()
        formData.append('fname', this.keyword)
        axios.post(url.welcome, formData)
          .then(res => {
            if (res.data.length) {
              this.list = res.data
            } else {
              this.list = [] // 当为空时将值赋值为数组 不然缓存的是上一次的值
            }
          })
      }, 100)
    }
  },
  watch: {
    // keyword () {
    //   if (this.timer) {
    //     clearTimeout(this.timer)
    //   }
    //   if (!this.keyword) {
    //     this.list = []
    //     return
    //   }
    //   this.timer = setTimeout(() => {
    //     var formData = new FormData()
    //     formData.append('fname', this.keyword)
    //     axios.post(url.welcome, formData)
    //       .then(res => {
    //         if (res.data.length) {
    //           this.list = res.data
    //         } else {
    //           this.list = [] // 当为空时将值赋值为数组 不然缓存的是上一次的值
    //         }
    //       })
    //   }, 500)
    // }
    searchitem () {
      this.searchHandle(this.searchitem)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, { mouseWheel: true, click: true, tap: true })
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/mixins.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: #fff;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.3rem;
      color: #111;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    margin-top: 0.12rem;
    color: #bbb;
    line-height: 0.64rem;
    padding-left: 0.2rem;

    .search-input {
      height: 100%;
      width: 100%;
      margin-left: 0.2rem;
      background: #f2f2f2;
      border-radius: 0.3rem;
      line-height: 0.64rem;
      text-align: center;
    }
  }

  .header-right {
    position: relative;
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;

    .inner {
      margin-left: 0.2rem;
      width: 0.85rem;
      height: 0.8rem;
      color: #111;
      ellipsis();
    }
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 0.9rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eeeeee;

  .search-item {
    line-height: 0.63rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}

.liimg {
  width: 1rem;
  height: 1rem;
  padding: 0.1rem;
  border-radius: 0.25rem;
}
</style>
