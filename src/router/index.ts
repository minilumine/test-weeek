import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Card from '@/components/Card.vue'
import CompanyDetailsForm from '@/components/CompanyDetailsForm.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/card',
    component: Card,
    props: (route) => ({ id: route.query.id }),
    redirect: '/card/company-details',
    children: [
      {
        path: 'company-details',
        component: CompanyDetailsForm,
      },
    ],
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
