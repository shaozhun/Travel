<template>
  <div>
    <el-button type="primary" @click="selectIcon">选择图标</el-button>
    <el-dialog :visible="selectDialog" width="90%" title="选择图标">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="FONT-AWESOME" name="FONT-AWESOME">
          <h2 class="h5">Newest</h2>
          <el-row v-for="(item,index) in NewestList" :key="index">
            <el-col
              :span="2"
              v-for="(inItem,inIndex) in item"
              :key="inIndex"
              :class="{isActive: inItem==currentName,icondemowrap: 1==1}"
            >
              <div class="iconWrapper" @click="handleIcon(inItem)">
                <i :class="'h3 fa fa-'+inItem"></i>
                <div class="icon-title2">{{inItem}}</div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="WEB-ICONS" name="WEB-ICONS">a</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectDialog: true,
      activeName: 'FONT-AWESOME',
      currentName: '',
      Newest: ['address-book', 'address-book-o', 'address-card', 'address-card-o', 'bandcamp', 'bath', 'bathtub', 'drivers-license', 'drivers-license-o', 'eercast', 'envelope-open', 'envelope-open-o', 'etsy', 'free-code-camp', 'grav', 'handshake-o', 'id-badge', 'id-card', 'id-card-o', 'imdb', 'linode', 'meetup', 'microchip', 'podcast', 'quora', 'ravelry', 's15', 'shower', 'snowflake-o', 'superpowers', 'telegram', 'thermometer', 'thermometer-0', 'thermometer-1', 'thermometer-2', 'thermometer-3', 'thermometer-4', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters', 'times-rectangle', 'times-rectangle-o', 'user-circle', 'user-circle-o', 'user-o', 'vcard', 'vcard-o', 'window-close', 'window-close-o', 'window-maximize', 'window-minimize', 'window-restore', 'wpexplorer']
    }
  },
  methods: {
    selectIcon () {
      this.selectDialog = true
    },
    handleClick () {
      console.log(2)
    },
    handleIcon (name) {
      this.currentName = name
    }
  },
  computed: {
    NewestList () {
      if (this.Newest) {
        const pages = []
        this.Newest.forEach((item, index) => {
          const page = Math.floor(index / 12)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
}
</script>
<style scoped>
.iconWrapper {
  text-align: center;
  padding: 15px 0;
}
.iconWrapper .h3 {
  font-size: 1.75rem;
}
.iconWrapper .icon-title2 {
  padding: 5px 0;
}
.icondemowrap:hover,
.icondemowrap.isActive {
  color: #fff;
  background-color: #41a9fd;
}
</style>
