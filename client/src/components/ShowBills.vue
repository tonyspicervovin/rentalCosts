<template>
    <tr orderBy name>    
    <td >{{ bill.renterName }}</td>
    <td> {{ bill.billName }} </td>
    <td> {{ bill.amount }} </td>
    <td><input type="checkbox" v-model="bill.paid" v-on:change="checked(bill)">
    </td>
  </tr>
</template>

<script>
export default {
    name: 'ShowBills',
   
    props: {
        bill: Object,
        
        },
    methods: {
       checked(bill){
           this.$emit('bill-paid', bill)   
       }
    }
}

</script>

<style scoped>
td {
    text-align: center;
}
img {
    height: 50px;
    padding-bottom: 20px;

}
</style>
