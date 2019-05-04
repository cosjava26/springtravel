import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import SpringtravelInfo from '@/components/Springtravel_info'
import SpringtravelLottery from '@/components/Springtravel_lottery'
import SpringtravelActivity from '@/components/Springtravel_activity'
import SpringtravelTour from '@/components/Springtravel_tour'
import SpringtravelFilm from '@/components/Springtravel_film'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/springtravel_info',
      name: 'Springtravel_info',
      component: SpringtravelInfo
    },
    {
      path: '/springtravel_lottery',
      name: 'Springtravel_lottery',
      component: SpringtravelLottery
    },
    {
      path: '/springtravel_activity',
      name: 'Springtravel_activity',
      component: SpringtravelActivity
    },
    {
      path: '/springtravel_tour',
      name: 'Springtravel_tour',
      component: SpringtravelTour
    },
    {
      path: '/springtravel_film',
      name: 'Springtravel_film',
      component: SpringtravelFilm
    }
  ]
})
