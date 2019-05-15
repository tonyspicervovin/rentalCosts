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
    deleteBill(id){
        return axios.delete('/api/bills/'+id).then(response => {
            return response.data
        })
    },
    getAllBills(){
        return axios.get('/api/bills').then(response => {
            return response.data
        })
    }
}
//making requests to routes on the server side