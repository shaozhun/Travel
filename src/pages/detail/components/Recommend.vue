<template>
  <div>
    <div class="title">
      <img
        class="title-heart"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
      />看了该景点的人还看了
    </div>
    <ul>
      <router-link
        tag="li"
        :to="`/detail/`+item.id"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="itemImg" :src="item.url" />
        <div
          class="mp-like-tag"
          style="background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)"
          v-show="item.tomorrow == 1"
        >可订明日</div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price">
            ¥
            <span class="price">{{item.price}}</span>起
            <span class="recomand">{{item.recommend}}条评论</span>
          </p>
          <button class="item-button">查看详情</button>
          <div class="city">{{item.city}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import url from '../../../common/api'
export default {
  name: 'DetailRecommend',
  data () {
    return {
      recommendList: null
    }
  },
  created () {
    this.getRecommendList()
  },
  methods: {
    getRecommendList () {
      axios.get(url.indexLikeData).then(res => {
        let list = res.data
        this.recommendList = list.slice(1, 7)
      })
    }
  },
  watch: {
    // 监听路由的变化，当路由发生变化刷新
    $route (n, o) {
      if (n.fullPath !== o.fullPath) {
        location.reload()
        // this.$emit('changeid')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;

  .title-heart {
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    padding-right: 0.1rem;
  }
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .itemImg {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .mp-like-tag {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 1.02rem;
    height: 0.38rem;
    background-size: 100%;
    color: #fff;
    font-size: 0.2rem;
    line-height: 0.38rem;
    text-indent: 0.04rem;
  }

  .item-info {
    flex: 1;
    min-width: 0;
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-price {
      margin-top: 0.22rem;
      color: #616161;
      font-size: 0.24rem;
      line-height: 0.4rem;
      color: #ff8300;

      .price {
        font-size: 0.4rem;
      }

      .recomand {
        float: right;
        margin-right: 1.3rem;
        color: #616161;
      }
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.1rem;
      color: #fff;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
    }

    .city {
      line-height: 0.44rem;
      margin-top: 0.1rem;
      float: right;
    }
  }
}
</style>
