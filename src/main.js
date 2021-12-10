/* import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
//import router from "@/router"
import { VueRouter } from 'vue-router';
import routes from './router';

Vue.use(VueRouter)
//createApp(App).mount('#app')

// configure router
export const route = new VueRouter({
    mode: "history",
    routes, // short for routes: routes
    linkActiveClass: 'active'
})

new Vue({
    //router: router,
    render: h => h(App),
    route
}).$mount("#app"); */

import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from "@/router"
import { createRouter, createWebHashHistory} from 'vue-router';
import routes from './router';
import {Chart} from 'chart.js'
import Chartick from  'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
//import { dollarFilter, percentFilter } from '@/filters';
const myVue = createApp(App)

const route = createRouter({
    history: createWebHashHistory(),
    routes,
})

/* myVue.filter('dollar', dollarFilter)
myVue.filter('percent', percentFilter) */
myVue.use(VueSpinners)
myVue.use(Chartick.use(Chart))
myVue.use(route)
myVue.use(router)
myVue.mount("#app");
