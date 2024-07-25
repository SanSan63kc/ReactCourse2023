import { createContext, useState } from 'react'

export let UserContext = createContext({
    userId: 1
})

export let UserContextProvider = ({ children }) => {
    
    let [userId, setUserId] = useState(1)

    return <UserContext.Provider value={{userId,setUserId}}>
        {children}
    </UserContext.Provider>
}