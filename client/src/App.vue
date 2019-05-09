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
      renters: [
        { name: 'example', email: 'TonSpice@gmail.com'},
      ],//array of renter objects
      
      name: '',
      email:''
    }
  },
  components: {
    Header,  ShowRenters, Footer, NewRenterForm
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
