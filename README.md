# vuePictureManager
该项目为图片管理插件，使用vue，element-ui，iconfont等技术进行构建。
[demo（在源码的example目录下）](https://trubasa.github.io/vuePictureManager/example/index.html)

> 安装

npm install vue-picture-manager --save

> 依赖

```$xslt

```

> 引入

- 页面直接引用
```
  <!--该项目依赖于vue，element-ui，如果您的项目已经引用过，可以不必再次引入-->
    <!--vue-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <!--element-ui-->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    
    <!--必须保证在vue和element-ui的引入之后-->
    <!--vue-picture-manager-->
    <link rel="stylesheet" href="../static/iconfont/iconfont.css">
    <script src="../dist/vue-picture-manager.js"></script>
 ```

- 脚手架导入
```$xslt
//ES6
import vuePictureManager from 'vue-picture-manager.js'
//require
var vuePictureManager =require(vuePictureManager)

Vue.use(vuePictureManager)

```

> 使用

#### 参数

name | description | type 
--- | --- | ---
upload-path | 上传接口地址 | String
img-list | 图片列表 | Array

#### 事件

name | description | param 
--- | --- | ---
upload-response| 上传接口回调 | 上传接口返回的数据
delete | 删除的图片回调 | 删除的图片url
selected | 选中的图片后，点击'确定'回调 | 选中的图片组成的数组

#### 方法（使用方法时记得使用ref给组件注册引用）

show 打开图片管理器
```$xslt
this.$refs.XXX.show({
  defaultUrlList: [],  //默认选中的图片的地址数组
  ensureFun: function (res) {  //选中图片后点击'确定'的回调，返回选中的图片数组
    that.selectedList = res  
  }
});
```


