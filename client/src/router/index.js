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
        {
            path: '/detail/:month',
            name: 'detail',
            component: MonthDetail
        }
    ]
})