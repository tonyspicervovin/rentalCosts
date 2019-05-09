import Router from 'vue-router'

import rentalMonths from '@/components/rentalMonths'

import MonthDetail from '@/components/MonthDetail'


export default new Router({
    routes: [
        
        {
            path: '/',
            component: rentalMonths
        },
        {
            path: '/detail/:month',
            name: 'detail',
            component: MonthDetail
        }
    ]
})