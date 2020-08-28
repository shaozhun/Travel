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
      Newest: [
        {
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
      WebApplicatioIcons: [
        {
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
          id: 1144,
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
        }, {
          id: 152,
          name: 'code-fork'
        }, {
          id: 153,
          name: 'coffee'
        }, {
          id: 154,
          name: 'cog'
        }, {
          id: 155,
          name: 'cogs'
        }, {
          id: 156,
          name: 'comment'
        }, {
          id: 157,
          name: 'comment-o'
        }, {
          id: 158,
          name: 'commenting'
        }, {
          id: 159,
          name: 'commenting-o'
        }, {
          id: 160,
          name: 'comments'
        }, {
          id: 1161,
          name: 'comments-o'
        }, {
          id: 161,
          name: 'compass'
        }, {
          id: 162,
          name: 'copyright'
        }, {
          id: 163,
          name: 'creative-commons'
        }, {
          id: 164,
          name: 'credit-card'
        }, {
          id: 165,
          name: 'credit-card-alt'
        }, {
          id: 166,
          name: 'crop'
        }, {
          id: 167,
          name: 'crosshairs'
        }, {
          id: 168,
          name: 'cube'
        }, {
          id: 169,
          name: 'cubes'
        }, {
          id: 170,
          name: 'cutlery'
        }, {
          id: 171,
          name: 'dashboard'
        }, {
          id: 172,
          name: 'database'
        }, {
          id: 173,
          name: 'deaf'
        }, {
          id: 174,
          name: 'deafness'
        }, {
          id: 175,
          name: 'desktop'
        }, {
          id: 176,
          name: 'diamond'
        }, {
          id: 177,
          name: 'dot-circle-o'
        }, {
          id: 178,
          name: 'download'
        }, {
          id: 179,
          name: 'drivers-license'
        }, {
          id: 180,
          name: 'drivers-license-o'
        }, {
          id: 181,
          name: 'edit'
        }, {
          id: 182,
          name: 'ellipsis-h'
        }, {
          id: 183,
          name: 'ellipsis-v'
        }, {
          id: 184,
          name: 'envelope'
        }, {
          id: 185,
          name: 'envelope-o'
        }, {
          id: 186,
          name: 'envelope-open'
        }, {
          id: 187,
          name: 'envelope-open-o'
        }, {
          id: 188,
          name: 'envelope-square'
        }, {
          id: 189,
          name: 'eraser'
        }, {
          id: 190,
          name: 'exchange'
        }, {
          id: 191,
          name: 'exclamation'
        }, {
          id: 192,
          name: 'exclamation-circle'
        }, {
          id: 193,
          name: 'exclamation-triangle'
        }, {
          id: 194,
          name: 'external-link'
        }, {
          id: 195,
          name: 'external-link-square'
        }, {
          id: 196,
          name: 'eye'
        }, {
          id: 197,
          name: 'eye-slash'
        }, {
          id: 198,
          name: 'eyedropper'
        }, {
          id: 199,
          name: 'fax'
        }, {
          id: 200,
          name: 'feed'
        }, {
          id: 201,
          name: 'female'
        }, {
          id: 202,
          name: 'fighter-jet'
        }, {
          id: 203,
          name: 'file-archive-o'
        }, {
          id: 204,
          name: 'file-audio-o'
        }, {
          id: 205,
          name: 'file-code-o'
        }, {
          id: 206,
          name: 'file-excel-o'
        }, {
          id: 207,
          name: 'file-image-o'
        }, {
          id: 208,
          name: 'file-movie-o'
        }, {
          id: 209,
          name: 'file-pdf-o'
        }, {
          id: 210,
          name: 'file-photo-o'
        }, {
          id: 211,
          name: 'file-picture-o'
        }, {
          id: 212,
          name: 'file-powerpoint-o'
        }, {
          id: 213,
          name: 'file-sound-o'
        }, {
          id: 214,
          name: 'file-video-o'
        }, {
          id: 215,
          name: 'file-word-o'
        }, {
          id: 216,
          name: 'file-zip-o'
        }, {
          id: 217,
          name: 'film'
        }, {
          id: 218,
          name: 'filter'
        }, {
          id: 219,
          name: 'fire'
        }, {
          id: 220,
          name: 'fire-extinguisher'
        }, {
          id: 221,
          name: 'flag'
        }, {
          id: 222,
          name: 'flag-checkered'
        }, {
          id: 223,
          name: 'flag-o'
        }, {
          id: 224,
          name: 'flash'
        }, {
          id: 225,
          name: 'flask'
        }, {
          id: 226,
          name: 'folder'
        }, {
          id: 227,
          name: 'folder-o'
        }, {
          id: 228,
          name: 'folder-open'
        }, {
          id: 229,
          name: 'folder-open-o'
        }, {
          id: 230,
          name: 'frown-o'
        }, {
          id: 231,
          name: 'futbol-o'
        }, {
          id: 232,
          name: 'gamepad'
        }, {
          id: 233,
          name: 'gavel'
        }, {
          id: 234,
          name: 'gear'
        }, {
          id: 235,
          name: 'gears'
        }, {
          id: 236,
          name: 'gift'
        }, {
          id: 237,
          name: 'glass'
        }, {
          id: 240,
          name: 'globe'
        }, {
          id: 241,
          name: 'graduation-cap'
        }, {
          id: 242,
          name: 'group'
        }, {
          id: 243,
          name: 'hand-grab-o'
        }, {
          id: 244,
          name: 'hand-lizard-o'
        }, {
          id: 245,
          name: 'hand-paper-o'
        }, {
          id: 246,
          name: 'hand-peace-o'
        }, {
          id: 247,
          name: 'hand-pointer-o'
        }, {
          id: 248,
          name: 'hand-rock-o'
        }, {
          id: 249,
          name: 'hand-scissors-o'
        }, {
          id: 250,
          name: 'hand-spock-o'
        }, {
          id: 251,
          name: 'hand-stop-o'
        }, {
          id: 252,
          name: 'handshake-o'
        }, {
          id: 253,
          name: 'hard-of-hearing'
        }, {
          id: 254,
          name: 'hashtags'
        }, {
          id: 255,
          name: 'hdd-o'
        }, {
          id: 256,
          name: 'headphones'
        }, {
          id: 257,
          name: 'heart'
        }, {
          id: 258,
          name: 'heart-o'
        }, {
          id: 259,
          name: 'heartbeat'
        }, {
          id: 260,
          name: 'history'
        }, {
          id: 261,
          name: 'home'
        }, {
          id: 262,
          name: 'hotel'
        }, {
          id: 263,
          name: 'hourglass'
        }, {
          id: 264,
          name: 'hourglass-1'
        }, {
          id: 265,
          name: 'hourglass-2'
        }, {
          id: 266,
          name: 'hourglass-3'
        }, {
          id: 267,
          name: 'hourglass-end'
        }, {
          id: 268,
          name: 'hourglass-half'
        }, {
          id: 269,
          name: 'hourglass-o'
        }, {
          id: 270,
          name: 'hourglass-start'
        }, {
          id: 271,
          name: 'i-cursor'
        }, {
          id: 272,
          name: 'id-badge'
        }, {
          id: 273,
          name: 'id-card'
        }, {
          id: 274,
          name: 'id-card-o'
        }, {
          id: 275,
          name: 'image'
        }, {
          id: 276,
          name: 'inbox'
        }, {
          id: 277,
          name: 'industry'
        }, {
          id: 278,
          name: 'info'
        }, {
          id: 279,
          name: 'info-circle'
        }, {
          id: 280,
          name: 'institution'
        }, {
          id: 281,
          name: 'key'
        }, {
          id: 282,
          name: 'keyboard-o'
        }, {
          id: 283,
          name: 'language'
        }, {
          id: 284,
          name: 'laptop'
        }, {
          id: 285,
          name: 'leaf'
        }, {
          id: 286,
          name: 'legal'
        }, {
          id: 287,
          name: 'lemon-o'
        }, {
          id: 288,
          name: 'level-down'
        }, {
          id: 289,
          name: 'level-up'
        }, {
          id: 290,
          name: 'life-bouy'
        }, {
          id: 291,
          name: 'life-buoy'
        }, {
          id: 292,
          name: 'life-ring'
        }, {
          id: 293,
          name: 'life-saver'
        }, {
          id: 294,
          name: 'lightbulb-o'
        }, {
          id: 295,
          name: 'line-chart'
        }, {
          id: 296,
          name: 'location-arrow'
        }, {
          id: 297,
          name: 'lock'
        }, {
          id: 298,
          name: 'low-vision'
        }, {
          id: 299,
          name: 'magic'
        }, {
          id: 300,
          name: 'magnet'
        }, {
          id: 301,
          name: 'mail-forward'
        }, {
          id: 302,
          name: 'mail-reply'
        }, {
          id: 303,
          name: 'mail-reply-all'
        }, {
          id: 304,
          name: 'male'
        }, {
          id: 305,
          name: 'map'
        }, {
          id: 306,
          name: 'map-marker'
        }, {
          id: 307,
          name: 'map-o'
        }, {
          id: 308,
          name: 'map-pin'
        }, {
          id: 309,
          name: 'map-signs'
        }, {
          id: 310,
          name: 'meh-o'
        }, {
          id: 311,
          name: 'microchip'
        }, {
          id: 312,
          name: 'microphone'
        }, {
          id: 313,
          name: 'microphone-slash'
        }, {
          id: 314,
          name: 'minus'
        }, {
          id: 315,
          name: 'minus-circle'
        }, {
          id: 316,
          name: 'minus-square'
        }, {
          id: 317,
          name: 'minus-square-o'
        }, {
          id: 318,
          name: 'mobile'
        }, {
          id: 319,
          name: 'mobile-phone'
        }, {
          id: 320,
          name: 'money'
        }, {
          id: 321,
          name: 'moon-o'
        }, {
          id: 322,
          name: 'mortar-board'
        }, {
          id: 323,
          name: 'motorcycle'
        }, {
          id: 324,
          name: 'mouse-pointer'
        }, {
          id: 325,
          name: 'music'
        }, {
          id: 326,
          name: 'navicon'
        }, {
          id: 327,
          name: 'newspaper-o'
        }, {
          id: 328,
          name: 'object-group'
        }, {
          id: 329,
          name: 'object-ungroup'
        }, {
          id: 330,
          name: 'paint-brush'
        }, {
          id: 331,
          name: 'paper-plane'
        }, {
          id: 332,
          name: 'paper-plane-o'
        }, {
          id: 333,
          name: 'paw'
        }, {
          id: 334,
          name: 'pencil'
        }, {
          id: 335,
          name: 'pencil-square'
        }, {
          id: 336,
          name: 'pencil-square-o'
        }, {
          id: 337,
          name: 'percent'
        }, {
          id: 338,
          name: 'phone'
        }, {
          id: 339,
          name: 'phone-square'
        }, {
          id: 340,
          name: 'photo'
        }, {
          id: 341,
          name: 'picture-o'
        }, {
          id: 342,
          name: 'pie-chart'
        }, {
          id: 343,
          name: 'plane'
        }, {
          id: 344,
          name: 'plug'
        }, {
          id: 345,
          name: 'plus'
        }, {
          id: 346,
          name: 'plus-circle'
        }, {
          id: 347,
          name: 'plus-square'
        }, {
          id: 348,
          name: 'plus-square-o'
        }, {
          id: 349,
          name: 'podcast'
        }, {
          id: 350,
          name: 'power-off'
        }, {
          id: 351,
          name: 'print'
        }, {
          id: 352,
          name: 'puzzle-piece'
        }, {
          id: 353,
          name: 'qrcode'
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
