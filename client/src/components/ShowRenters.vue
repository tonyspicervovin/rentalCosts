<template>
    <tr orderBy name>    
    <td>{{ renter.name }}</td>
    <td>{{ renter.email }}</td>
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
           if (confirm(`Delete ${renter.name}?`)){
               this.$emit('delete-renter', renter)
           }
            
        }
    }
    
    
}

</script>

<style scoped>
tr {
    text-align: right;
    color: blue;
}
img {
    height: 50px;
    padding-bottom: 20px;

}
</style>
