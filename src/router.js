import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home'

import Category from './components/Category'

Vue.use(Router)

/**
 * Define Globals Routes Application
 */

let router = new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        
    ]  
})

export default router