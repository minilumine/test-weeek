import '@/utils/class-component-hooks'

import Vue from 'vue'

import router from '@/router'

import App from '@/components/App.vue'

import './styles/styles.scss'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
