<template>
  <div v-show="this.historylist.length">
    <div class="title">搜索历史</div>
    <div class="mp-history-conouter">
      <div class="mp-history-coninner">
        <div
          class="mp-history-item"
          v-for="(item,index) in historylist"
          :key="index"
          @click="historyHandle(item)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchList',
  props: {
    hotSearchList: Array
  },
  data () {
    return {
      historylist: []
    }
  },
  mounted () {
    this.historylist = JSON.parse(localStorage.getItem('history')) || []
  },
  methods: {
    historyHandle (item) {
      this.$emit('triggerItem', item)
    }
  }
}
</script>
<style lang="stylus" scoped>
.title {
  color: #bbc;
  font-size: 12px;
  margin: 0.3rem 0.2rem;
}

.mp-history-conouter {
  padding: 0.1rem 0;
  width: 100%;
  overflow-y: hidden;
  background-color: #fff;
  border-top: 1px solid #dce5e7;
  border-bottom: 1px solid #dce5e7;
}

.mp-history-coninner {
  margin-top: 0.3rem;
}

.mp-history-item {
  max-width: 2.89rem;
  height: 0.6rem;
  font-size: 0.26rem;
  color: #333;
  background-color: #fff;
  line-height: 0.6rem;
  padding: 0 0.15rem;
  margin-bottom: 0.1rem;
  text-align: center;
  float: left;
  margin-left: 0.2rem;
  border: 1px solid #c9cccd;
  border-radius: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
