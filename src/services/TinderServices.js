import axios from 'axios'

const http=axios.create({
    baseURl: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const login = (({...data}) => http.post('/login',{...data}))
const logout = (()=> http.post('/logout'))
const getMatches = ((id) => http.get(`users/${id}/matches`))
const register = (({...data}) => http.post('/users/register', {...data}))
const profile = (({...data}) => http.patch(`/users/${data.id}`, {...data}))
const randomUser = (() => http.get('/users'))


export default {
    login,
    randomUser,
    logout,
    getMatches,
    register,
    profile
}