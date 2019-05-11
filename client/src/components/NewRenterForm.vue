<template>
<div>
    <div class="alert alert-danger" v-show="errors && errors.length > 0">
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li> 
    </div>
    <!--Catching empty input -->
    <div class="card add-renter m-2 p-2">
        <form>
            <h4 class="card-title">Add new renter</h4>
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model.trim="newRenterName">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" class="form-control" v-model.trim="newEmail">
            </div>
                <button class="btn btn-primary" v-on:click="addRenter">Add</button>
                <br><br><br>
        </form>
        <!--Input to add new renter , name and email  -->
        <h3>
        Current Renters
        </h3>
    </div>
        
</div>
</template>

<script>
export default {
    name: 'NewRenterForm',
    data(){
        return{
            newRenterName: '',
            newEmail: '',
            errors:[]
        }
    },
    methods:{
        addRenter(){
            console.log('added')
            this.errors=[]
            if (this.newRenterName && this.newEmail){
                let renter= { RenterName: this.newRenterName, RenterEmail: this.newEmail}
                this.$emit('renter-added', renter)
                this.newRenterName = ''
                this.newEmail = ''
            }else{
                this.errors.push('Name and email are required')
            }
        }
    }
}
// method to add new renter
</script>

<style>
</style>
