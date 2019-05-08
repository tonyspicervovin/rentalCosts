import Router from 'vue-router'

import rentalMonths from '@/components/rentalMonths'
import Month from '@/components/Month'
import MonthDetail from '@/components/MonthDetail'


export default new Router({
    routes: [
      
        
        {
            path: '/detail/:month',
            name: 'detail',
            component: MonthDetail
        }
    ]
})