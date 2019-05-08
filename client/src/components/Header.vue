<template>
    <div class="header">

    <div class="jumbotron">
        <h1 class="display-4" id="title">Welcome to Your Rental Costs Management App</h1>
    </div>
    </div>
</template>


<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .jumbotron {
       
        background-position: center;
        background-size: cover;
    }
    #title {
        font-weight: 500;
        color: navy;
    }
</style>