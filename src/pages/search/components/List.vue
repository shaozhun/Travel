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
            />
          </div>
        </div>
        <div class="mp-hotsearch-itemcon mp-sight-maxline" mp-role="hotsearch-select">
          <div class="mp-hotsearch-iteminner" mp-role="hotsearch-sight-inner">
            <a
              href="http://piao.qunar.com/touch/detail.htm?id=14407&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E7%259F%25B3%25E7%2587%2595%25E6%25B9%2596%26from_index%3D0"
              class="mp-hotsearch-item"
              data-name="石燕湖"
              data-click="tl_hot_search"
              data-click-from-value="石燕湖"
              data-click-from-index="0"
              data-click-dist-city
            >石燕湖</a>
            <a
              href="http://piao.qunar.com/touch/detail.htm?id=23&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E6%25B9%2596%25E5%258D%2597%25E5%25A4%25A7%25E5%259B%25B4%25E5%25B1%25B1%26from_index%3D1"
              class="mp-hotsearch-item"
              data-name="湖南大围山"
              data-click="tl_hot_search"
              data-click-from-value="湖南大围山"
              data-click-from-index="1"
              data-click-dist-city
            >湖南大围山</a>
            <a
              href="http://piao.qunar.com/touch/detail.htm?id=7121&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E9%2595%25BF%25E6%25B2%2599%25E4%25B8%2596%25E7%2595%258C%25E4%25B9%258B%25E7%25AA%2597%26from_index%3D2"
              class="mp-hotsearch-item"
              data-name="长沙世界之窗"
              data-click="tl_hot_search"
              data-click-from-value="长沙世界之窗"
              data-click-from-index="2"
              data-click-dist-city
            >长沙世界之窗</a>
            <a
              href="http://piao.qunar.com/touch/detail.htm?id=38932&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E6%25B9%2596%25E5%258D%2597%25E7%259C%2581%25E6%25A3%25AE%25E6%259E%2597%25E6%25A4%258D%25E7%2589%25A9%25E5%259B%25AD%26from_index%3D3"
              class="mp-hotsearch-item"
              data-name="湖南省森林植物园"
              data-click="tl_hot_search"
              data-click-from-value="湖南省森林植物园"
              data-click-from-index="3"
              data-click-dist-city
            >湖南省森林植物园</a>
            <a
              href="http://piao.qunar.com/touch/detail.htm?id=461294&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E6%25B5%25B7%25E7%25AB%258B%25E6%2596%25B9%25E6%25B5%25B7%25E6%25B4%258B%25E5%2585%25AC%25E5%259B%25AD%26from_index%3D4"
              class="mp-hotsearch-item"
              data-name="海立方海洋公园"
              data-click="tl_hot_search"
              data-click-from-value="海立方海洋公园"
              data-click-from-index="4"
              data-click-dist-city
            >海立方海洋公园</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchList'
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
    padding-left: .74rem;
    background-color: #fff;
    border-top: 1px solid #dce5e7;
}
.mp-hotsearch-typecon {
    position: absolute;
    left: 0;
    top: 0;
    width: .74rem;
    height: 100%;
    overflow: hidden;
    line-height: 100%;
    text-align: center;
}
.mp-sight-maxline {
    max-height: 1.8rem;
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
    height: .36rem;
    max-width: 2.89rem;
    line-height: .36rem;
    text-align: center;
    display: block;
    padding-left: .3rem;
    padding-right: .3rem;
    border-right: 1px dashed #c9cccd;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .25rem;
    margin-bottom: .25rem;
}
.mp-hotsearch-typeinner {
    position: absolute;
    width: .72rem;
    height: 70%;
    top: 15%;
    border-right: 1px solid #dce5e7;
}
</style>
