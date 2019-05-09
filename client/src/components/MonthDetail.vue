<template>
    <div class="month-detail p-2">
        <h2>The Month of {{ month.name }}</h2>
        <!-- displaying which month the user is viewing -->

        <div class="card add-bill m-2 p-2">
        <form>
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
            <div id="table">
                <tr>
                    <th>Bill</th>
                    <th>Amount</th>
                </tr>
            </div>
        </form>
        <!--Input to add new renter , name and email  -->
        <h3>
        
        <ShowBills
            v-for="bill in bills" v-bind:key="bill.name" 
            v-bind:bill="bill"
            v-on:delete-bill="billDeleted">
        </ShowBills>
           
        </h3>
    </div>
 </div>
    
    
</template>
<!-- displaying month name and table for bills for that month-->
<script>

import ShowBills from '@/components/ShowBills.vue'
console.log(name)
export default {
    name: 'MonthDetail',
    components: {
        ShowBills,
        
    },
    data(){
        return {
            newBill: '',
            newAmount: '',
            billPortion: '',
            totalBill: '',
            bill: '',
            month:{
                name: ''},
            bills:[
        {name: 'groceries', amount: '500'}
                ],
    // array of bills
                }
            },
    methods: {
        addBill(){

            if (this.newBill && this.newAmount){
                let bill= { name: this.newBill, amount: this.newAmount}
                this.bills.push(bill)
                this.newRenterName = ''
                this.newEmail = ''
            }else{
                this.errors.push('Name and email are required')
            }
        
        },
        billDeleted(bill) {
        this.bills = this.bills.filter( function(s) { return s != bill })
    }
},
// methods to add and delete bill
    mounted(){
        this.month.name = this.$route.params.month
        
    }
}
</script>
<style scoped>
#table {
    word-spacing: 20px;
    color: green;
}
</style>
