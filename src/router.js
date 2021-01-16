import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home'

import Category from './components/Category'
import Article from './components/Article'
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
        {
            path:'/category',
            name:'category',
            component:Category
        },
        {
            path:'/article',
            name:'article',
            component:Article
        }
        
    ]  
})

export default router