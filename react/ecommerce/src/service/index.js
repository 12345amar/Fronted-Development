export const userRegistration = async (payload) => {
   
    try {
        return await fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(payload)
        })
            .then(res=>res.json())
            .then(json=>json)

    } catch (error) {
        console.error('error', error)
        return undefined
    }
  
}

