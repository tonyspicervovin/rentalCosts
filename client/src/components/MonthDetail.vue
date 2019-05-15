<template>
    <div class="month-detail p-2">
        <div class="card bill-list m-2 p-2">
                <h4 class="card-title">Bills for {{ month.name }}</h4>
                <div id="bill-table">
                    <table class="table">
                        <tr>
                            <th>Renter Name</th>
                            <th>Bill Name</th>
                            <th>Amount Owed</th>
                            <th>Mark as paid</th>
                        </tr>
                        <ShowBills
                        v-for="bill in bills" v-bind:key="bill.id" 
                        v-bind:bill="bill"
                        v-on:delete-bill="billDeleted">
                        </ShowBills>
                    </table>
                </div>
        </div>
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
    <!--Input to add new renter , name and email  -->
    </div>
</template>
<!-- displaying month name and table for bills for that month-->
<script>
import ShowBills from '@/components/ShowBills.vue'
export default {
    name: 'MonthDetail',
    components: {
        ShowBills,
        },
    data(){
        return {
            newBill: '',
            newAmount: '',
            bill: '',
            month:{
                name: ''},
            bills:[],
        }
    // array of bills
            },
    mounted(){
        this.getBills()
        this.month.name = this.$route.params.month
        },
    //loading bills initially
    //getting current month
    methods: {
       addBill(){
            if (this.newBill && this.newAmount){
                let bill= { name: this.newBill, amount: this.newAmount, month: this.month.name}
                this.newBill = ''
                this.newAmount = ''
                this.$billAPIService.addBill(bill).then( bill => {
                    this.getBills()
                })}else{
                this.errors.push('Name and email are required')
                }
            },
        getBills(){
            console.log('happening')
            this.$billAPIService.getAllBills().then(data => {
                this.bills = data
                console.log(this.bills)
            })  
        },
        billDeleted(bill) {
        this.bills = this.bills.filter( function(s) { return s != bill })
        this.$billAPIService.deleteBill(bill.id).then( () => {
        this.getBills()
         })
        console.log('deleting')
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
