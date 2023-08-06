const API_BASE_URL = 'http://api.escuelajs.co/api/v1'
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export const userRegistration = async (payload) => {
   
    try {
        console.log("payload on service", payload)
       
        return await fetch(`${API_BASE_URL}/users`,{
            method:"POST",
            headers: myHeaders,
            body:JSON.stringify(payload)
        })
            .then(res=>res.json())
            .then(json=>json)

    } catch (error) {
        console.error('error', error)
        return undefined
    }
  
}

export const userLogin = async (payload) => {
    try {
        return await fetch(`${API_BASE_URL}/auth/login`,{
            method:'POST',
            body:JSON.stringify(payload)
        })
            .then(res=>res.json())
            .then(json=>json)
    } catch (error) {
        console.error('error', error)
        return undefined
    }
  
}

