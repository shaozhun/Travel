<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="img-wrapper">
          <img class="itemImg" :src="item.url" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desct}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  data () {
    return {
    }
  },
  props: {
    weekendList: Array
  },
  created () {
  },
  methods: {
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
</style>
