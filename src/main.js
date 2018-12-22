import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import { Select, Option, Upload, InputNumber, Input, Message, MessageBox } from 'element-ui'

Vue.config.productionTip = false
Vue.use(VeeValidate, { locale: 'zh_CN' })
Vue.use(Select)  // 引入element select
Vue.use(Option)
Vue.use(Upload)
Vue.use(InputNumber)
Vue.use(Input)
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
