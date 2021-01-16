import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home'
import store from './store'
import Category from './components/Category'
import Article from './components/Article'
import Login from './components/Login'
Vue.use(Router)

/**
 * Define Globals Routes Application
 */

let router = new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            meta:{
                ADMIN:true,
                GROCER:true,
                SELLER:true
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{
                FREE:true
            }
        },
        {
            path:'/category',
            name:'category',
            component:Category,
            meta:{
                ADMIN:true,
                GROCER:true
            }
        },
        {
            path:'/article',
            name:'article',
            component:Article,
            meta:{
                ADMIN:true,
                GROCER:true
            }
        }
    ]  
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.FREE)){
        next()
        //Checking if the user logged hat admin role
    }else if(store.state.user && store.state.user.rol === 'ADMIN'){
        if(to.matched.some(record=>record.meta.ADMIN)){
            next()
        }
    }else if(store.state.user && store.state.user.rol === 'SELLER'){
        if(to.matched.some(record=>record.meta.SELLER)){
            next()
        }
    }else if(store.state.user && store.state.user.rol === 'GROCER'){
        if(to.matched.some(record=>record.meta.GROCER)){
            next()
        }
    }else{
       next({name:'login'})
    }
})
export default router