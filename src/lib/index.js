/**
 * Created by Trubasa 1141521502@qq.com on 2018/6/23.
 */
import vuePictureManager from './vuePictureManager.vue' // 导入组件
import allImg from './components/allImg.vue' // 导入组件
import allImgItem from './components/allImgItem.vue' // 导入组件
import myUpload from './components/myUpload.vue' // 导入组件
/*import '../../static/iconfont/iconfont.css'*/

const pictureManager = {
  install(Vue, options) {
    Vue.component(allImg.name, allImg)
    Vue.component(allImgItem.name, allImgItem)
    Vue.component(myUpload.name, myUpload)
    Vue.component(vuePictureManager.name, vuePictureManager) // vuePayKeyboard.name 组件的name属性 // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已 // Vue.prototype.$xxx // 最终可以在任何地方通过 this.$xxx 调用 // 虽然没有明确规定用$开头 但是大家都默认遵守这个规定

  }
}

if(typeof window !=='undefined' && window.Vue){
  window.Vue.use(pictureManager);
}


export default pictureManager
