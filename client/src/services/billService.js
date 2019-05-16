import axios from 'axios'
const users_url ='/api/users'
const bills_url='/api/bills'
export default {
    getAllRenters(){
        return axios.get('/api/users').then(response => {
            return response.data
        })
    },
    addRenter(renter){
        return axios.post(users_url, renter).then(response => {
            return response.data
        })

    },
    deleteRenter(renterName){
        return axios.delete('/api/users/'+renterName).then(response => {
            return response.data
        })
    },
    addBill(bill){
        return axios.post(bills_url, bill).then(response => {
            return response.data
        })
    },
    billPaid(bill){
        return axios.patch('/api/renterPortions/'+bill.id, bill).then(response => {
            return response.data
        })
    },
    getAllBills(month){
        return axios.get('/api/renterPortions/'+month).then(response => {
            return response.data
        })
    }
}
//making requests to routes on the server side