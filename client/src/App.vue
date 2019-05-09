<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    <NewRenterForm v-on:renter-added="newRenterAdded"></NewRenterForm>
    <ShowRenters
    v-for="renter in renters" 
    v-bind:key="renter.name" 
    v-bind:renter="renter"
    v-on:delete-renter="renterDeleted">
    </ShowRenters>
    
    
    <rentalMonths></rentalMonths>
    <Footer></Footer>
   </div>
   <!--Components in my app template       -->
</template>

<script>
import NewRenterForm from './components/NewRenterForm.vue'
import ShowRenters from './components/ShowRenters.vue'
import rentalMonths from './components/rentalMonths.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//importing components
export default {
  name: 'app',
  data() {
    return {
      renters: [
        { name: 'example', email: 'TonSpice@gmail.com'},
      ],//array of renter objects
      
      name: '',
      email:''
    }
  },
  components: {
    Header, NewRenterForm, ShowRenters, rentalMonths, Footer
  },//components
  methods: {
    newRenterAdded(renter){
            this.renters.push(renter)
            console.log(renter)
            //method to add a new renter
        },
    renterDeleted(renter) {
      this.renters = this.renters.filter( function(s) { return s != renter })
    },//method to delete a new renter
    
  
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
