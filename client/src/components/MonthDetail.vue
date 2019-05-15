<template>
    <div class="month-detail p-2">
        <h2>The Month of {{ month.name }}</h2>
        <!-- displaying which month the user is viewing -->

        <div class="card add-bill m-2 p-2">
        
            <h4 class="card-title">Add new bill</h4>
            <div class="form-group">
                <label for="type">Type</label>
                <input id="type" class="form-control" v-model.trim="newBill">
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input id="amount" class="form-control" v-model.trim="newAmount">
            </div>
                <button class="btn btn-primary" v-on:click="addBill">Add</button>
        </div>
        <div class="card pay-bill m-2 p-2">
        
            <h4 class="card-title">Pay a bill</h4>
            <div class="form-group">
                <label for="type">What Bill</label>
                <input id="type" class="form-control" v-model.trim="whichBill">
            </div>
            <div class="form-group">
                <label for="amount">Payment Amount</label>
                <input id="amount" class="form-control" v-model.trim="howMuch">
            </div>
                <button class="btn btn-primary" v-on:click="addPayment">Pay</button>
        </div>
            

        
        <!--Input to add new renter , name and email  -->
        <h3>
        
        <ShowBills
            v-for="bill in bills" v-bind:key="bill.name" 
            v-bind:bill="bill"
            v-on:delete-bill="billDeleted">
        </ShowBills>
        <BillTable>
            
        </BillTable>
        </h3>
    
 </div>
    
    
</template>
<!-- displaying month name and table for bills for that month-->
<script>

import ShowBills from '@/components/ShowBills.vue'
import BillTable from '@/components/BillTable.vue'
export default {
    name: 'MonthDetail',
    components: {
        ShowBills,BillTable
        
    },
    data(){
        return {
            numberRenters: '',
            whichBill: '',
            howMuch: '',
            newBill: '',
            newAmount: '',
            bill: '',
            month:{
                name: ''},
            bills:[
        {name: 'groceries', amount: '500', month: 'January'}
                ],
            
    // array of bills
                }
            },
    mounted(){
        this.getBills()
        this.month.name = this.$route.params.month
        this.getRenters()
    },
    //loading bills initially
    //getting current month
    methods: {
       
        addBill(){

            if (this.newBill && this.newAmount){
                let bill= { name: this.newBill, amount: this.newAmount, month: this.month.name}
                this.$billAPIService.addBill(bill).then( bill => {
                    this.getBills
                })
                this.newRenterName = ''
                this.newEmail = ''
                
            }else{
                this.errors.push('Name and email are required')
            }
        
        },
        getBills(){
            console.log('happening')
            this.$billAPIService.getAllBills().then(data => {
                this.bills = data
                console.log(data)
            })
        },
        billDeleted(bill) {
        this.bills = this.bills.filter( function(s) { return s != bill })
        getBills()
    }
},
// methods to add and delete bill
    
}
</script>
<style scoped>
#table {
    text-align: center;
    color: green;
}
</style>
