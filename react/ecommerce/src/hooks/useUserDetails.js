import { userRegistration, userLogin } from '../service';
import { USER_ACTION } from '../utils/Constants';

const useUserDetails = async (payload) => {
    
    switch (payload.action) {
        case USER_ACTION.USER_REGISTRATION:
            console.log('payload.data', payload.data)
            const response = await userRegistration(payload.data)
            console.log("response", response)
            return response
    
        default:
            break;
    }
    
}

export default useUserDetails