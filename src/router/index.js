import Vue from 'vue'
import VueRouter from 'vue-router'

import Card from '@/components/Card'
import CardView from '@/components/CardView'
import CardEdit from '@/components/CardEdit'
import CompanyDetailsForm from '@/components/CompanyDetailsForm'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/card',
      component: Card,
      props: (route) => ({ id: route.query.id }),
      redirect: '/card/edit',
      children: [
        {
          path: 'view',
          name: 'card-view',
          component: CardView,
        },
        {
          path: 'edit',
          name: 'card-edit',
          component: CardEdit,
          children: [
            {
              path: 'company-details',
              component: CompanyDetailsForm
            },
          ]
        },
      ]
    },
  ],
})
