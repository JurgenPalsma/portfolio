import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dc from '@/components/projects/Dc'
import Modimo from '@/components/projects/Modimo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects/dc',
      name: 'Dc',
      component: Dc
    },
    {
      path: '/projects/modimo',
      name: 'Modimo',
      component: Modimo
    }
  ]
})
