<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="d-flex flex-wrap justify-content-around">
        <div class="p-2" v-for="month in months" v-bind:key="month.name">
                <Month
                    v-bind:month="month">
                </Month>
            </div>
        </div>
  </div>
</template>
<!--Displaying each month  -->
<script>
import Month from '@/components/Month'
export default {
  name: 'rentalMonths',
  components: {
    Month
  },
  data(){
    return {
      months: [
        {name: 'January'},
        {name: 'February'},
        {name: 'March'},
        {name: 'April'},
        {name: 'May'},
        {name: 'June'},
        {name: 'July'},
        {name: 'August'},
        {name: 'September'},
        {name: 'October'},
        {name: 'November'},
        {name: 'December'},
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#b-button {

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
