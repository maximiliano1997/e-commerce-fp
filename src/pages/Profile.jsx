import React, { useContext } from 'react'

import { UserContext } from '../App';


export function Profile() {
    const { user } = useContext(UserContext)
    const storage = JSON.parse(localStorage.getItem("user"))

    if (storage) {
        return (
            <div>Profile</div>
        )

    }
}
