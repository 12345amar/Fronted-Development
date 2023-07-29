import { userRegistration } from '../service';

const useUserDetails = async (payload) => {

    const response = await userRegistration(payload)
    return response
}

export default useUserDetails