import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = ({children}) => {

    let UserData = JSON.parse(localStorage.getItem('Login'))

    const [user, setuser] = useState({
        email:UserData ? UserData.email : '' ,
        login:UserData ? UserData.login : false
    })
  return (
    <UserContext.Provider value={{user, setuser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserState
