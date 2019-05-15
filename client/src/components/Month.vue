<template>
    <div class = "state-summary p2 rounded">
        <p>
            <router-link v-bind:to="{ name: 'detail', params: {month: monthName }  }">
                <b-button id = "button" variant="outline-primary">{{ month.name }}</b-button>
            </router-link>
        </p>
    </div>
</template>
<!-- displaying each name and a money symbol that will route the app to the page for that month -->
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
    },
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
