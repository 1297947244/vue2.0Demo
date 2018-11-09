// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import '../static/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.config.productionTip = false
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello',
      datePlaceholder: 'Please select date'
    },
    ...enLocale
  },
  zh: {
    message: {
      hello: '你好',
      datePlaceholder: '选择日期时间'
    },
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

window.app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
