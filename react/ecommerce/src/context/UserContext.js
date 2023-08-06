
import React, { useReducer, createContext } from 'react'
import { USER_ACTION } from '../utils/Constants';
import useUserDetails from '../hooks/useUserDetails'

const UserContext = createContext()


export const UserProvider = ({children}) => {
    const callUserAPI = useUserDetails
    const intialValue = {
        isLogin: false,
        userDetails: null,
        address: null,
        isRegistration: false,
        isLoading: false,
        isError: {
            action: '',
            error: '',
            payload: {}
        }
    }

    const userReducer = (prevState, payload) => {
         switch (payload.action) {
            case USER_ACTION.USER_REGISTRATION:
                if (payload.data) {
                    const response = callUserAPI(payload)
                    if (!response.error) {
                        return { ...prevState, isRegistration: true }
                    } else {
                        const myError =  {
                            action: USER_ACTION.USER_REGISTRATION,
                            error: response.error,
                            payload: response
                        }
                        return { ...prevState, isError: myError }
                    }
                }
                return false
               
                // registration functionality
           
            case USER_ACTION.USER_LOGIN:
                const response = callUserAPI(payload.data)
                if (response) {
                    return { ...prevState, isRegistration: true }
                } else {
                    const myError =  {
                        action: USER_ACTION.USER_REGISTRATION,
                        error: 'Something went to wrong',
                        payload: response
                    }
                    return { ...prevState, isError: myError }
                }
            break;
            case USER_ACTION.FETCH_USER_DETAILS:
            break;
            case USER_ACTION.UPDATE_USER_DETAILS:
            break;
            default:
                return prevState
           
        }
    }
    
    const [userState, userDispatch] = useReducer(userReducer, intialValue)
   
return(
 
    <UserContext.Provider value={[userState, userDispatch]}>
        {children}
    </UserContext.Provider>
    )

}


export default UserContext