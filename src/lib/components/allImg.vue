<template>
  <div class="all-img" >
      <all-img-item v-for="item,index in imgList" :key="item" @delete="deleteItem(index)"  @select="select(index)" @ensure="$emit('ensure')" :isSelect="curIndex==index?true:false" :url="item" ></all-img-item>
  </div>
</template>

<script>
export default {
  name: 'all-img',
  data () {
    return {
      thisKey:'',
      curIndex:-1,
    }
  },
  props:['imgList'],
  mounted(){

  },
  methods: {
    deleteItem(index){
      this.imgList.splice(index,1);
    },
    select(index){
      // console.log('get select item',index);
      this.curIndex=index;
      // this.thisKey=new Date().getTime();
      this.$emit('select',this.imgList[index]);
    },
    setSelect(url){
      var curIndex=-1
      /*this.imgList.every((ele,index)=>{
        console.log(ele,index);
          if(ele==url){
            curIndex=index;
            return false;
          }
      })*/
      for(var i=0;i<this.imgList.length;i++){
        if(this.imgList[i]==url){
          curIndex=i;
          break;
        }
      }
      this.curIndex=curIndex;
      // this.thisKey=new Date().getTime();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item_box{
    display: inline-block;
  }

  /*.delete {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    background: #409eff;
    padding: 5px;
    border-radius: 0 0 0 8px;
    display: none;
  }
  .img_box:hover .delete{
    display: block;
  }*/
</style>
