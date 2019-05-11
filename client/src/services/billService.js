import axios from 'axios'
const users_url ='/api/users'
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

    }
}