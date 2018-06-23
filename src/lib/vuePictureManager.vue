<template>
  <div class="vue-picture-manager">
    <!--<div ref="allImg">allImg</div>-->
    <el-dialog
      title="图片管理"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose">
      <div>
        <!--<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>-->

        <el-tabs :tab-position="tabPosition" style="height: 400px;">
          <el-tab-pane label="所有图片">
            <all-img ref="allImg" :imgList="imgList" @ensure="ensure" @select="selectedImg"></all-img>
          </el-tab-pane>
          <el-tab-pane label="本地上传图片">

          </el-tab-pane>
          <el-tab-pane label="添加网络图片">图片上传</el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import common from '../assets/common'

  export default {
    name: 'vue-picture-manager',
    data() {
      return {
        selectedImgUrl: '',
        dialogVisible: false,
        tabPosition: 'left',
        ensureFun: null,
      }
    },
    props: {
      imgList: {
        type: Array,
        default: function () {
          return []
        }
      },
    },
    mounted() {

    },
    methods: {
      ensure() {
        this.dialogVisible = false;
        this.$emit('selected',this.selectedImgUrl);
        if(this.ensureFun){
          this.ensureFun(this.selectedImgUrl);
        }
      },
      selectedImg(url) {
        this.selectedImgUrl = url;
      },
      show(obj) { //url,ensureFun
        var that = this;

        common.doWhile({
          target: function () {
            return that.$refs.allImg
          },
          ready: function () {
            that.$refs.allImg.setSelect(obj.defaultUrl || '');
            if (obj.ensureFun) {
              that.ensureFun = obj.ensureFun;
            }else{
              that.ensureFun=null;
            }
          }
        });

        this.dialogVisible = true;


      },
      hide() {
        this.dialogVisible = false;
      },
      handleClose(done) {
        /*this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});*/
        done();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style>
  .el-tabs__content {
    height: 400px;
    overflow-y: auto;
  }
</style>
