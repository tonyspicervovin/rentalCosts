import Router from 'vue-router'

import Footer from '@/components/Footer'

import MonthDetail from '@/components/MonthDetail'


export default new Router({
    routes: [
        
        {
            path: '/',
            component: Footer
        },
        {
            path: '/detail/:month',
            name: 'detail',
            component: MonthDetail
        }
    ]
})