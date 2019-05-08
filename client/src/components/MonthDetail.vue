<template>
    <div class="month-detail p-2">

        <h2>The Month of {{month.name}}</h2>

        
  
    </div>
</template>

<script>

export default {
    name: 'MonthDetail',
    data(){
        return {
            month: {
                name: ''
            }
        }
    },
    mounted(){
        this.month.name = this.$route.params.month
    }
}