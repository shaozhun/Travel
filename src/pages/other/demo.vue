<template>
  <div>
    <el-button type="primary" @click="selectIcon">选择图标</el-button>
    <el-dialog :visible="selectDialog" width="90%" title="选择图标">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="FONT-AWESOME" name="FONT-AWESOME">
          <h2 class="h5">Newest</h2>
          <el-row>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="iconWrapper">
                <i class="h3 fa fa-address-book"></i>
                <div class="icon-title2">address-book</div>
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
      activeName: 'FONT-AWESOME'
    }
  },
  methods: {
    selectIcon () {
      this.selectDialog = true
    },
    handleClick () {
      console.log(2)
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
</style>
