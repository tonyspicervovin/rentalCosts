<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    
   
    <NewRenterForm v-on:renter-added="newRenterAdded"></NewRenterForm>
    <div class="card bill-list m-2 p-2">
    <h4 class="card-title">Renters</h4>
      <div id="bill-table">
        <table class="table">
          <tr>
          <th>Renter Name</th>
          <th>Renter Email</th>
          </tr>
          <ShowRenters
            v-for="renter in renters" 
            v-bind:key="renter.id" 
            v-bind:renter="renter"
            v-on:delete-renter="renterDeleted">
          </ShowRenters>
    <!-- displaying renters -->
        </table>
      </div>
    </div>
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
        //getting renters initially
    },
  methods: {
    newRenterAdded(renter){
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
