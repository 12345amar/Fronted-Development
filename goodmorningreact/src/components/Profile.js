import React from 'react'

const Profile = (props) => {
    const { name } = props.myInfo
    return <div>
        Hello Profile
        <p> Name: {name} </p>
        </div>
}
export default Profile
