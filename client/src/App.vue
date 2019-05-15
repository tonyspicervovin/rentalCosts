<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    
   
    <NewRenterForm v-on:renter-added="newRenterAdded"></NewRenterForm>
    
     <ShowRenters
    v-for="renter in renters" 
    v-bind:key="renter.renterName" 
    v-bind:renter="renter"
    v-on:delete-renter="renterDeleted">
    </ShowRenters>
    
    <Footer></Footer>
   </div>
   <!--Components in my app template       -->
</template>

<script>
import ShowRenters from './components/ShowRenters.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NewRenterForm from '@/components/NewRenterForm.vue'
import { constants } from 'fs';
//importing components
export default {
  name: 'app',
  data() {
    return {
      renters: [],//array of renter objects
      
      renterName: '',
      renterEmail:''
    }
  },
  components: {
    Header,  ShowRenters, Footer, NewRenterForm
  },//components
  
    mounted(){
        this.getAllRenters()
    
  },
  methods: {
    newRenterAdded(renter){
            console.log('adding user')
            console.log('user is '+renter.renterName)
            this.$billAPIService.addRenter(renter).then( renter => {
              this.getAllRenters()
            })
            //method to add a new renter
        },
    renterDeleted(renter) {
      this.$billAPIService.deleteRenter(renter.renterName).then( () => {
        this.getAllRenters()
      })
    },//method to delete a new renter
   getAllRenters(){
            this.$billAPIService.getAllRenters().then(data => {
                this.renters = data
                console.log(data)
            })
        }
    
  
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
