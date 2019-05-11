<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    
    <ShowRenters
    v-for="renter in renters" 
    v-bind:key="renter.name" 
    v-bind:renter="renter"
    v-on:delete-renter="renterDeleted">
    </ShowRenters>
    <NewRenterForm v-on:renter-added="newRenterAdded"></NewRenterForm>
    
    
    
    <Footer></Footer>
   </div>
   <!--Components in my app template       -->
</template>

<script>
import ShowRenters from './components/ShowRenters.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NewRenterForm from '@/components/NewRenterForm.vue'
//importing components
export default {
  name: 'app',
  data() {
    return {
      renters: [],//array of renter objects
      
      RenterName: '',
      RenterEmail:''
    }
  },
  components: {
    Header,  ShowRenters, Footer, NewRenterForm
  },//components
  mounted(){
    this.updateRenters()
  },
  methods: {
    newRenterAdded(renter){
            console.log('adding user')
            console.log('user is '+renter.name)
            this.$billAPIService.addRenter(renter).then( renter => {
              this.updateRenters()
            })
            //method to add a new renter
        },
    renterDeleted(renter) {
      
    },//method to delete a new renter
    updateRenters(){
      this.$billAPIService.getAllRenters().then( renters => {
        this.renters = renters
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
