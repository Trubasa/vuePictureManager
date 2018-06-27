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

        <el-tabs :tab-position="tabPosition" v-model="activeName" style="height: 400px;">
          <el-tab-pane label="所有图片" name="1">
            <all-img ref="allImg"
                     :img-list="imgList"
                     @delete="$emit('delete',$event)"
                     @ensure="ensure"
                     @select="selectedImg">
            </all-img>
          </el-tab-pane>
          <el-tab-pane label="上传图片" name="2">
            <my-upload ref="myUpload"
                       :upload-path="uploadPath"
                        @upload-response="$emit('upload-response',$event)">
            </my-upload>
          </el-tab-pane>
          <!--<el-tab-pane label="添加网络图片" name="3">图片上传</el-tab-pane>-->
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <span v-if="activeName==1">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="ensure">确定</el-button>
        </span>
        <span v-if="activeName==2">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="danger" @click="$refs.myUpload.clearFiles()" >重置</el-button>
          <el-button type="primary" @click="$refs.myUpload.submit()">上传</el-button>
        </span>
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
        activeName:'1'
      }
    },
    props:['imgList','uploadPath'],
    /*props: {
      imgList: {
        type: Array,
        default: function () {
          return []
        }
      },
      uploadPath:{
        type:String,
        default:function () {
          return ''
        }
      }
    },*/
    watch:{
      dialogVisible(val){
        if(!val){
          this.$refs.allImg.clearSelected();
        }
      }
    },
    mounted() {

    },
    methods: {
      mapData(urlList,dataList,key){
        var ary=[];
        for(var i=0;i<urlList.length;i++){
          for(var j=0;j<dataList.length;j++){
            if(urlList[i]==dataList[j][key]){
              ary.push(dataList[j]);
              break;
            }
          }
        }
        return ary;
      },
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
            if(obj.defaultUrlList){
              if(Array.isArray(obj.defaultUrlList)){
                  that.$refs.allImg.selectedList=obj.defaultUrlList;
              }else{
                console.error('请确保defaultUrlList为数组');
              }
            }


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
