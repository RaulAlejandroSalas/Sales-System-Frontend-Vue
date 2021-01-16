<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg5 xl4>
      <v-card>
        <v-toolbar dark color="blue darken-3" >
             <v-toolbar-title color="white" align-center>Access System</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            autofocus
            color="accent"
            label="Email"
            v-model="email"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            color="accent"
            label="Password"
            v-model="password"
            required
          ></v-text-field>
          <v-flex class="red--text" v-if="messageError">
              {{messageError}}
          </v-flex>
        </v-card-text>
        <v-card-actions class="px-3 pb-3">
            <v-flex text-xs-right>
                <v-btn color="primary" @click="login()">Login</v-btn>
            </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
    data:()=>({
            email:'',
            password:'',
            messageError:null
    }),
    methods:{
        login(){
            axios.post('user/login',{email:this.email,password:this.password})
                 .then(response=>{
                    const {tokenReturn} = response.data
                    this.$store.dispatch('storeToken',tokenReturn)
                    this.$router.push({name:'home'})
                 })
                 .catch(error=>{
                     console.log(error);
                     this.messageError = null
                    
                     if(error.response.status==404){
                         this.messageError = 'Incorrect Credentials'    
                     }else{
                         this.messageError='Internal Server Error'
                     }
                    console.log(this.messageError)
                 }) 
        },
    }
}
</script>