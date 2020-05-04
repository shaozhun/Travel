<template>
  <div>
    <ul>
      <li class="item border-bottom clear">
        <div class="img-wrapper">
          <img
            class="itemImg"
            src="http://img1.qunarzz.com/sight/p0/1505/c2/c27514a93e8b8392.water.jpg_640x276_9c0cfd7a.jpg"
          />
        </div>
        <div class="item-info">
          <p class="item-title">东江湖</p>
          <p class="item-desc">急流险滩，龙景峡谷</p>
        </div>
        <div class="pricewrap">
          <p class="item-price">
            ¥
            <span class="price">100</span>
            <span class="qi">起</span>
          </p>
        </div>
      </li>
      <li class="item border-bottom clear">
        <div class="img-wrapper">
          <img
            class="itemImg"
            src="http://img1.qunarzz.com/sight/p0/1505/c2/c27514a93e8b8392.water.jpg_640x276_9c0cfd7a.jpg"
          />
        </div>
        <div class="item-info">
          <p class="item-title">东江湖</p>
          <p class="item-desc">急流险滩，龙景峡谷</p>
        </div>
        <div class="pricewrap">
          <p class="item-price">
            ¥
            <span class="price">100</span>
            <span class="qi">起</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DetailMain',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.clear::after {
  clear: both;
  display: block;
  content: '';
}

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.img-wrapper {
  overflow: hidden;
  heigth: 0;
  paddung-bottom: 33.9%;
}

.itemImg {
  width: 100%;
}

.item-info {
  min-width: 0;
  padding: 0.1rem;
  margin-left: 0.2rem;
  float: left;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #616161;
    ellipsis();
  }
}

.pricewrap {
  float: right;
  margin-right: 0.2rem;
}

.item-price {
  margin-top: 0.22rem;
  color: #616161;
  font-size: 0.24rem;
  line-height: 0.4rem;
  color: #ff8300;
}

.qi {
  color: black;
}

.price {
  font-size: 0.4rem;
}

.item {
  border-bottom: 0.2rem solid #eee;
}
</style>
