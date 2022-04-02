import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './completedBooks.js'

Vue.config.productionTip = false

let data = {
  bookList: mock,
  completedBooks: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
