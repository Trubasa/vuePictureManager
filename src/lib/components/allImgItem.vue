<template>
  <div class="all-img-item">
    <div :class="['img_box',isSelect?'active':'']" @click="select" @dblclick="$emit('ensure')">
      <div class="select_status">
        <i class="vue-picture-manager-icon icon-check2"></i>
      </div>

      <div class="info_panel">
        {{imgWidth}} x {{imgHeight}}
      </div>

      <div class="func_panel">
        <div class="func_item" @click.stop="select">
          <i class="vue-picture-manager-icon icon-xuanzhong" ></i>
        </div>
        <div class="func_item" @click.stop="deleteItem">
          <i class="vue-picture-manager-icon icon-ai-delete" ></i>
        </div>
      </div>

      <img :src="url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'all-img-item',
  data () {
    return {
      imgHeight:0,
      imgWidth:0
    }
  },
  props:['url','isSelect'],
  mounted(){
    var that=this;
    var img=new Image();
    img.src=this.url;
    img.onload=function () {
      that.imgHeight=img.height;
      that.imgWidth=img.width;
    }
  },
  methods: {
    deleteItem(){
      var that=this;
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.$emit('delete')
        /*this.$message({
          type: 'success',
          message: '删除成功!'
        });*/
      }).catch(() => {

      });
    },
    ensure(){
      console.log('ensure');
    },
    select(){
      // console.log('send select item');
      this.$emit('select');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .all-img-item{
    display: inline-block;
  }
  img{
    height: 140px;
  }
  .img_box.active{
    border: 1px solid #409eff;
  }
  .active .select_status{
    display: block;
  }
  .select_status {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    background: #409eff;
    border-radius: 0 0 0 100px;
    padding: 5px 5px 10px 10px;
    cursor: pointer;
    display: none;
  }

  .img_box{
    overflow:hidden;
    position: relative;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    border: 1px solid #fff;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .img_box:hover{
    border: 1px solid rgba(0, 0, 0, 0.6);
    min-width: 20px;
  }
  .func_panel {
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background: rgba(0, 0, 0, 0.6);
    -webkit-border-radius: 0 6px 6px 0;
    -moz-border-radius: 0 6px 6px 0;
    border-radius: 0 6px 6px 0;
    color: #fff;
    left: -40px;
    transition: all 0.3s;
  }
  .img_box:hover .func_panel{
    left:0
  }
  .func_item:hover .iconfont{
    color:#409eff;
  }
  .info_panel {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    padding: 0 5px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    transition: all 0.3s;
    font-size: 12px;
  }
  /*.info_panel {
    position: absolute;
    box-sizing: border-box;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    background: rgba(0, 0, 0, 0.6);
    -webkit-border-radius: 0 6px 6px 0;
    -moz-border-radius: 0 6px 6px 0;
    border-radius: 0 6px 6px 0;
    color: #fff;
    bottom: -40px;
    transition: all 0.3s;
  }
  .img_box:hover .info_panel{
    bottom:0
  }*/
</style>
