import Vue from 'vue'
import Router from 'vue-router'

import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Page3',
      name: 'Page',
      component: Page3
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
