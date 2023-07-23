import React, { useEffect } from 'react'

const Profile = (props) => {
    const { myInfo, setAddress, myParentFunc } = props
    const { name } = myInfo
   
    useEffect(() => {
        setAddress('Noida')
        myParentFunc([123, 345, 12, 456, 45, 6456])
    }, [])
   const updateAddress = () => {
        setAddress('Delhi')
   }
    return <div>
        Hello Profile
        <p> Name: {name} </p>
        <button type="button" onClick={updateAddress}>Update Parent Address</button>
        </div>
}
export default Profile
