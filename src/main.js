/*import Vue from 'vue'*/
import App from './App.vue'
import vuePictureManager from './lib/index.js'

Vue.use(vuePictureManager);
new Vue({
  el: '#app',
  render: h => h(App)
})
