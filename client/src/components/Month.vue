<template>


<div class = "state-summary p2 rounded">
        <b-button id = "button" variant="outline-primary">{{ month.name }}</b-button>
        <p>
            <router-link v-bind:to="{ name: 'detail', params: {month: monthName }  }">
                <img class ="map-icon" src="@/assets/money-bag.png">
            </router-link>
        </p>

    </div>

    
</template>

<script>

export default {
    name: 'Month',
    props: {
        month: Object
    },
    data(){
        return {
            monthName: this.month.name,
            

        }
    }
}


</script>

<style>
#button{
    height: 100px;
    width: 300px;
}
img {
    padding-top: 20px;
    height: 80px;
    width: 150x;
}
</style>
