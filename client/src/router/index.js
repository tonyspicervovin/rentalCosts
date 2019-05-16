import Router from 'vue-router'
import RentalMonths from '@/components/RentalMonths'
import Footer from '@/components/Footer'

import MonthDetail from '@/components/MonthDetail'


export default new Router({
    routes: [
        {
            path: '/',
            component: RentalMonths
        },
        // setting the home route to show RentalMonths component
        {
            path: '/detail/:month',
            name: 'detail',
            component: MonthDetail
        }
        //routing for each month page
    ]
})