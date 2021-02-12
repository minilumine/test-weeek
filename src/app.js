import Vue from 'vue'

// import router from './router'

import App from '@/components/App'

import './styles/styles.scss'

new Vue({
  // router,
  render: (h) => h(App),
}).$mount('#root')
