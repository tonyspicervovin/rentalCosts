<template>
    <div class="month-detail p-2">
        
        <h2>The Month of </h2>

        <span class="p-3">
                <router-link to="/">Home</router-link>
        </span>

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