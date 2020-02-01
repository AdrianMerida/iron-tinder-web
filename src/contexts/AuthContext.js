import React, {createContext, useState} from 'react'
import TinderServices from '../services/TinderServices'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')))

    const setUser = (user) => {
        localStorage.storage.setItem('user', user ? JSON.stringify(user) : null)
    }

    const logout = () => {
        TinderServices.logout()
            .then(() => {
                setUser()
            })
    }

    
    const value = {
        currentUser: data,
        setUser,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
    


}

export default AuthContext