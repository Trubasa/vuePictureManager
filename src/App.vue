<template>
  <div id="app">
    <el-button @click="showPicManager" type="primary">选择图片</el-button>
    <vue-picture-manager ref="pictureManager" :isShow="isShow" :imgList="imgList" @selected="selected"></vue-picture-manager>
  </div>
</template>

<script>
  import common from './assets/common'
export default {
  name: 'app',
  data () {
    return {
      isShow:false,
      msg: 'Welcome to Your Vue.js App',
      imgList:[
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528290656336&di=4e0f860cb8a078356935dbfd77303071&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b34e595da4c1a8012193a3b0a930.jpg%402o.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3650821734,216302652&fm=27&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=863946972,1320437579&fm=27&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2331418472,997892443&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2168851560,2127087326&fm=27&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=189016275,904273216&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3624658227,1873430595&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2269707447,3312642447&fm=27&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076705715,3109825956&fm=27&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1643364463,3040105054&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3957931430,771077774&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4024491638,1929347796&fm=27&gp=0.jpg',
      ]
    }
  },
  methods:{
    showPicManager(){
      var that=this;
      // this.isShow=true;
      common.doWhile({
        target:function() {
          return that.$refs.pictureManager
        },
        ready:function () {
          that.$refs.pictureManager.show({
            defaultUrl:'',
            ensureFun:function (res) {
              console.log('选中的图片url：',res);
            }
          });
        }
      });
    },
    selected(val){
      console.log('选中的图片url：',val);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
