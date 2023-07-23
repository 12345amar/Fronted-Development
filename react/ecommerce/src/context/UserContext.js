import React, { useReducer, createContext } from 'react'
import { USER_ACTION } from '../utils/Constants';

const UserContext = createContext()

const userReducer = (prevState, payload) => {
    switch (payload.action) {
        case USER_ACTION.USER_REGISTRATION:
            console.log("user context", prevState, payload)
            
            // registration functionality
        break;
        case USER_ACTION.USER_LOGIN:
        break;
        case USER_ACTION.FETCH_USER_DETAILS:
        break;
        case USER_ACTION.UPDATE_USER_DETAILS:
        break;
        default:
            return prevState
       
    }
}

export const UserProvider = ({children}) => {
    const intialValue = {
        isLogin: false,
        userDetails: null,
        address: null
    }

    const [userState, userDispatch] = useReducer(userReducer, intialValue)

return(
    <UserContext.Provider value={{userState, userDispatch}}>
        {children}
    </UserContext.Provider>
    )

}


export default UserContext