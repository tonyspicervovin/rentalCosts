<template>
    <tr orderBy name>    
    <td>{{ 'harold' }}</td>
    <td>{{ bill.name }}</td>
    <td>{{ bill.amount }}</td>
    <td>
        <img class="delete-icon" v-on:click="deleteBill(bill)" src = "@/assets/money-bag.png">
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
       
        deleteBill(bill) {
           if (confirm(`Do you want to make ${bill.name} as paid?`)){
               this.$emit('delete-bill', bill)
           }
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
