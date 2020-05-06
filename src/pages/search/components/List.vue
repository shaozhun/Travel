<template>
  <div>
    <div class="title">热门搜索</div>
    <div class="mp-hotsearch-con">
      <div class="mp-hotsearch-group">
        <div class="mp-hotsearch-typecon">
          <div class="mp-hotsearch-typeinner">
            <img
              src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png"
              class="mp-hotsearch-typeicon"
              width="30px"
            />
          </div>
        </div>
        <div class="mp-hotsearch-itemcon mp-sight-maxline" mp-role="hotsearch-select">
          <div class="mp-hotsearch-iteminner" mp-role="hotsearch-sight-inner">
            <router-link
              tag="a"
              :to="`/detail/`+item.id"
              class="mp-hotsearch-item"
              data-name="石燕湖"
              v-for="item in hotSearchList"
              :key="item.id"
            >{{item.title}}</router-link>
          </div>
        </div>
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

.mp-hotsearch-group {
  position: relative;
  padding-left: 0.74rem;
  background-color: #fff;
  border-top: 1px solid #dce5e7;
}

.mp-hotsearch-typecon {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.74rem;
  height: 100%;
  overflow: hidden;
  line-height: 100%;
  text-align: center;
}

.mp-sight-maxline {
  max-height: 2.8rem;
}

.mp-hotsearch-itemcon {
  zoom: 1;
  overflow: hidden;
  position: relative;
}

.mp-hotsearch-iteminner {
  zoom: 1;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
}

.mp-hotsearch-item {
  display: block;
  float: left;
  height: 0.36rem;
  max-width: 2.89rem;
  line-height: 0.36rem;
  text-align: center;
  display: block;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border-right: 1px dashed #c9cccd;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.mp-hotsearch-typeinner {
  position: absolute;
  width: 0.72rem;
  height: 70%;
  top: 15%;
  border-right: 1px solid #dce5e7;
}
</style>
