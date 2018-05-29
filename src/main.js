import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vuejs-bonus-aut.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fsafasdf'
axios.defaults.headers.get['Accepts'] = 'application.json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor', config);
  return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response interceptor' ,res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.request.eject(resInterceptor);

import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
