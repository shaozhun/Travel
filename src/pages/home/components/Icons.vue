<template>
  <div>
    <el-dialog
      :visible="dialogSetIcon"
      width="90%"
      title="选择图标"
      class="dialog"
      :append-to-body="true"
      top="8vh"
    >
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="FONT-AWESOME" name="FONT-AWESOME">
          <h2 class="h5">Newest</h2>
          <el-row v-for="item in NewestList" :key="item.id">
            <el-col
              :span="2"
              v-for="inItem in item"
              :key="inItem.id"
              :class="{isActive: inItem.id==currentId,icondemowrap: 1==1}"
            >
              <div class="iconWrapper" @click="handleIcon(inItem)">
                <i :class="'h3 fa fa-'+inItem.name"></i>
                <div class="icon-title2">{{inItem.name}}</div>
              </div>
            </el-col>
          </el-row>

          <h2 class="h5">WebApplicatioIcons</h2>
          <el-row v-for="item in WebApplicatioIconsList" :key="item.id">
            <el-col
              :span="2"
              v-for="inItem in item"
              :key="inItem.id"
              :class="{isActive: inItem.id==currentId,icondemowrap: 1==1}"
            >
              <div class="iconWrapper" @click="handleIcon(inItem)">
                <i :class="'h3 fa fa-'+inItem.name"></i>
                <div class="icon-title2">{{inItem.name}}</div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="WEB-ICONS" name="WEB-ICONS">
          <el-row v-for="(item,index) in WebIconsList" :key="index">
            <el-col
              :span="2"
              v-for="(inItem,inIndex) in item"
              :key="inIndex"
              :class="{isActive: inItem==currentName,icondemowrap: 1==1}"
            >
              <div class="iconWrapper" @click="handleIcon(inItem)">
                <i :class="'h3  wb-'+inItem"></i>
                <div class="icon-title2">{{inItem}}</div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancleClick">取 消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'FONT-AWESOME',
      currentName: '',
      currentId: '',
      Newest: [{
        id: 1,
        name: 'address-book'
      }, {
        id: 2,
        name: 'address-book-o'
      }, {
        id: 3,
        name: 'address-card'
      }, {
        id: 4,
        name: 'address-card-o'
      }, {
        id: 5,
        name: 'bandcamp'
      }, {
        id: 6,
        name: 'bath'
      }, {
        id: 7,
        name: 'bathtub'
      }, {
        id: 8,
        name: 'drivers-license'
      }, {
        id: 9,
        name: 'drivers-license-o'
      }, {
        id: 10,
        name: 'eercast'
      }, {
        id: 11,
        name: 'envelope-open'
      }, {
        id: 12,
        name: 'envelope-open-o'
      }, {
        id: 13,
        name: 'etsy'
      }, {
        id: 14,
        name: 'free-code-camp'
      }, {
        id: 15,
        name: 'grav'
      }, {
        id: 16,
        name: 'handshake-o'
      }, {
        id: 17,
        name: 'id-badge'
      }, {
        id: 18,
        name: 'id-card'
      }, {
        id: 19,
        name: 'id-card-o'
      }, {
        id: 20,
        name: 'imdb'
      }, {
        id: 21,
        name: 'linode'
      }, {
        id: 22,
        name: 'meetup'
      }, {
        id: 23,
        name: 'microchip'
      }, {
        id: 24,
        name: 'podcast'
      }, {
        id: 25,
        name: 'quora'
      }, {
        id: 26,
        name: 'ravelry'
      }, {
        id: 27,
        name: 's15'
      }, {
        id: 28,
        name: 'shower'
      }, {
        id: 29,
        name: 'snowflake-o'
      }, {
        id: 30,
        name: 'superpowers'
      }, {
        id: 31,
        name: 'telegram'
      }, {
        id: 32,
        name: 'thermometer'
      }, {
        id: 33,
        name: 'thermometer-0'
      }, {
        id: 34,
        name: 'thermometer-1'
      }, {
        id: 35,
        name: 'thermometer-2'
      }, {
        id: 36,
        name: 'thermometer-3'
      }, {
        id: 37,
        name: 'thermometer-4'
      }, {
        id: 38,
        name: 'thermometer-empty'
      }, {
        id: 39,
        name: 'thermometer-full'
      }, {
        id: 40,
        name: 'thermometer-half'
      }, {
        id: 41,
        name: 'thermometer-quarter'
      }, {
        id: 42,
        name: 'thermometer-three-quarters'
      }, {
        id: 43,
        name: 'times-rectangle'
      }, {
        id: 44,
        name: 'times-rectangle-o'
      }, {
        id: 45,
        name: 'user-circle'
      }, {
        id: 46,
        name: 'user-circle-o'
      }, {
        id: 47,
        name: 'user-o'
      }, {
        id: 48,
        name: 'vcard'
      }, {
        id: 49,
        name: 'vcard-o'
      }, {
        id: 50,
        name: 'window-close'
      }, {
        id: 51,
        name: 'window-close-o'
      }, {
        id: 52,
        name: 'window-maximize'
      }, {
        id: 53,
        name: 'window-minimize'
      }, {
        id: 54,
        name: 'window-restore'
      }, {
        id: 55,
        name: 'wpexplorer'
      }],
      WebApplicatioIcons: [{
        id: 56,
        name: 'address-book'
      }, {
        id: 57,
        name: 'address-book-o'
      }, {
        id: 58,
        name: 'address-card'
      }, {
        id: 59,
        name: 'address-card-o'
      }, {
        id: 60,
        name: 'adjust'
      }, {
        id: 61,
        name: 'american-sign-language-interpreting'
      }, {
        id: 62,
        name: 'anchor'
      }, {
        id: 63,
        name: 'archive'
      }, {
        id: 64,
        name: 'area-chart'
      }, {
        id: 65,
        name: 'arrows'
      }, {
        id: 164,
        name: 'arrows-h'
      }, {
        id: 165,
        name: 'arrows-v'
      }, {
        id: 66,
        name: 'asl-interpreting'
      },
      {
        id: 67,
        name: 'assistive-listening-systems'
      }, {
        id: 68,
        name: 'asterisk'
      }, {
        id: 69,
        name: 'at'
      }, {
        id: 70,
        name: 'audio-description'
      }, {
        id: 71,
        name: 'automobile'
      }, {
        id: 72,
        name: 'balance-scale'
      }, {
        id: 73,
        name: 'ban'
      }, {
        id: 74,
        name: 'bank'
      }, {
        id: 75,
        name: 'bar-chart'
      }, {
        id: 76,
        name: 'bar-chart-o'
      }, {
        id: 77,
        name: 'barcode'
      }, {
        id: 78,
        name: 'bars'
      }, {
        id: 79,
        name: 'bath'
      }, {
        id: 80,
        name: 'bathtub'
      }, {
        id: 81,
        name: 'battery'
      }, {
        id: 82,
        name: 'battery-0'
      }, {
        id: 83,
        name: 'battery-1'
      }, {
        id: 84,
        name: 'battery-2'
      }, {
        id: 85,
        name: 'battery-3'
      }, {
        id: 86,
        name: 'battery-4'
      }, {
        id: 87,
        name: 'battery-empty'
      }, {
        id: 88,
        name: 'battery-full'
      }, {
        id: 89,
        name: 'battery-half'
      }, {
        id: 90,
        name: 'battery-quarter'
      }, {
        id: 91,
        name: 'battery-three-quarters'
      }, {
        id: 92,
        name: 'bed'
      }, {
        id: 93,
        name: 'beer'
      }, {
        id: 94,
        name: 'bell'
      }, {
        id: 95,
        name: 'bell-o'
      }, {
        id: 96,
        name: 'bell-slash'
      }, {
        id: 97,
        name: 'bell-slash-o'
      }, {
        id: 98,
        name: 'bicycle'
      }, {
        id: 99,
        name: 'binoculars'
      }, {
        id: 100,
        name: 'birthday-cake'
      }, {
        id: 101,
        name: 'blind'
      }, {
        id: 102,
        name: 'bluetooth'
      }, {
        id: 103,
        name: 'bluetooth-b'
      }, {
        id: 104,
        name: 'bolt'
      }, {
        id: 105,
        name: 'bomb'
      }, {
        id: 106,
        name: 'book'
      }, {
        id: 107,
        name: 'bookmark'
      }, {
        id: 108,
        name: 'bookmark-o'
      }, {
        id: 109,
        name: 'braille'
      }, {
        id: 110,
        name: 'briefcase'
      }, {
        id: 111,
        name: 'bug'
      }, {
        id: 112,
        name: 'building'
      }, {
        id: 113,
        name: 'building-o'
      }, {
        id: 114,
        name: 'bullhorn'
      }, {
        id: 115,
        name: 'bullseye'
      }, {
        id: 116,
        name: 'bus'
      }, {
        id: 117,
        name: 'cab'
      }, {
        id: 118,
        name: 'calculator'
      }, {
        id: 119,
        name: 'calendar'
      }, {
        id: 120,
        name: 'calendar-check-o'
      }, {
        id: 121,
        name: 'calendar-minus-o'
      }, {
        id: 122,
        name: 'calendar-o'
      }, {
        id: 123,
        name: 'calendar-plus-o'
      }, {
        id: 124,
        name: 'calendar-times-o'
      }, {
        id: 125,
        name: 'camera'
      }, {
        id: 126,
        name: 'camera-retro'
      }, {
        id: 127,
        name: 'car'
      }, {
        id: 128,
        name: 'caret-square-o-down'
      }, {
        id: 129,
        name: 'caret-square-o-left'
      }, {
        id: 130,
        name: 'caret-square-o-right'
      }, {
        id: 131,
        name: 'caret-square-o-up'
      }, {
        id: 132,
        name: 'cart-arrow-down'
      }, {
        id: 133,
        name: 'cart-plus'
      }, {
        id: 134,
        name: 'cc'
      }, {
        id: 135,
        name: 'certificate'
      }, {
        id: 136,
        name: 'check'
      }, {
        id: 137,
        name: 'check-circle'
      }, {
        id: 138,
        name: 'check-circle-o'
      }, {
        id: 139,
        name: 'check-square'
      }, {
        id: 140,
        name: 'check-square-o'
      }, {
        id: 141,
        name: 'child'
      }, {
        id: 142,
        name: 'circle'
      }, {
        id: 143,
        name: 'circle-o'
      }, {
        id: 144,
        name: 'circle-o-notch'
      }, {
        id: 145,
        name: 'circle-thin'
      }, {
        id: 144,
        name: 'clock-o'
      }, {
        id: 146,
        name: 'clone'
      }, {
        id: 147,
        name: 'close'
      }, {
        id: 148,
        name: 'cloud'
      }, {
        id: 149,
        name: 'cloud-download'
      }, {
        id: 150,
        name: 'cloud-upload'
      }, {
        id: 151,
        name: 'code'
      }]
    }
  },
  props: {
    dialogSetIcon: Boolean
  },
  methods: {
    selectIcon () {
      this.dialogSetIcon = true
    },
    handleClick () {
      console.log(2)
    },
    handleIcon (name) {
      this.currentName = name.name
      this.currentId = name.id
    },
    handleConfirmClick () {
      this.$emit('confirmIcon', this.currentName)
      this.currentName = ''
      this.currentId = ''
    },
    handleCancleClick () {
      this.$emit('cancelIcon')
      this.currentName = ''
      this.currentId = ''
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
    },
    WebApplicatioIconsList () {
      if (this.WebApplicatioIcons) {
        const pages = []
        this.WebApplicatioIcons.forEach((item, index) => {
          const page = Math.floor(index / 12)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    },
    WebIconsList () {
      if (this.WebIcons) {
        const pages = []
        this.WebIcons.forEach((item, index) => {
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
  padding: 30px 0;
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
.dialog >>> .el-dialog {
  position: relative;
  margin: 0 auto 0px;
  background: #ffffff;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 50%;
  height: 80%;
}
.dialog >>> .el-dialog__body {
  max-height: 85% !important;
  padding: 0 20px;
  min-height: 70%;
  overflow-y: auto;
}
</style>
