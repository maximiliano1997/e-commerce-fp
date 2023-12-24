import React, { useState } from 'react';

import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'


export function Login({ getUsers }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: [''], queryFn: getUsers })

    console.log(query.data)
    return (
        <div className='bg-black text-white p-8'>
            <h2>Login Account</h2>
            <form>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input type="password" value={email} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}


// avatar
// :
// "https://i.imgur.com/LDOO4Qs.jpg"
// creationAt
// :
// "2023-12-23T10:04:12.000Z"
// email
// :
// "john@mail.com"
// id
// :
// 1
// name
// :
// "Jhon"
// password
// :
// "changeme"
// role
// :
// "customer"
// updatedAt
// :
// "2023-12-23T10:04:12.000Z"