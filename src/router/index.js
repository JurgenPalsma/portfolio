import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dc from '@/components/projects/Dc'
import Modimo from '@/components/projects/Modimo'
import Uni from '@/components/projects/Uni'

import TagDetail from '@/components/TagDetail'
import Tag from '@/components/Tag'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/portfolio/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio/projects/dc',
      name: 'Dc',
      component: Dc
    },
    {
      path: '/portfolio/projects/modimo',
      name: 'Modimo',
      component: Modimo
    },
    {
      path: '/portfolio/projects/uni',
      name: 'Uni',
      component: Uni
    },
    {
      path: '/portfolio/tag',
      name: 'Tag',
      component: Tag,
    },
    // Tags
    {
      path: '/portfolio/tags',
      name: 'TagDetail',
      component: TagDetail
    },

  ]
})
