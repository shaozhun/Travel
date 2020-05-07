<template>
  <div>
    <div class="title">搜索历史</div>
    <div class="mp-history-conouter">
      <div class="mp-history-coninner" style="width: 38px;">
        <div
          data-key="w"
          class="mp-history-item"
          data-click="tl_search_history"
          data-click-from-value="w"
          data-click-from-index="0"
          data-click-dist-city
        >w</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchList',
  props: {
    hotSearchList: Array
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
    height: 1.24rem;
    width: 100%;
    overflow-y: hidden;
    background-color: #fff;
    border-top: 1px solid #dce5e7;
    border-bottom: 1px solid #dce5e7;
}
.mp-history-coninner {
    margin-top: .3rem;
}
.mp-history-item {
    max-width: 2.89rem;
    height: .6rem;
    font-size: .26rem;
    color: #333;
    background-color: #fff;
    line-height: .6rem;
    padding: 0 .15rem;
    text-align: center;
    float: left;
    margin-left: .2rem;
    border: 1px solid #c9cccd;
    border-radius: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
