import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token:null,
        user:null
    },
    mutations:{
        setToken:(state,token)=>{
            state.token = token
        },
        setUser:(state,user)=>{
            state.user = user
        }
    },actions:{
        storeToken:({commit},token)=>{
            commit("setToken",token)
            commit("setUser",decode(token))
        },
        autoLogin:()=>{
            let token = localStorage.getItem("token")
            if(token){
                commit("setToken",token)
                commit("setUser",decode(token))
            }
        }     
    }
})