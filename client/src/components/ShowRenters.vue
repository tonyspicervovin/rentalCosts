<template>
    <tr orderBy name>    
    <td>{{ renter.renterName }}</td>
    <td>{{ renter.renterEmail }}</td>
    <td>
        <img class="delete-icon" v-on:click="deleteRenter(renter)" src = "@/assets/delete.png">
    </td>
    </tr>
  
</template>

<script>
export default {
    name: 'ShowRenters',
   
    props: {
        renter: Object,
        
    },
    methods: {
        deleteRenter(renter) {
           if (confirm(`Delete ${renter.renterName}?`)){
               this.$emit('delete-renter', renter)
           } 
        }
    }
}

</script>

<style scoped>
td {
    color: black;
    
}
img {
    height: 50px;
    padding-bottom: 20px;

}
</style>
