import { useState, useContext } from 'react';
import { UserContext } from '../App';

import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'

import { useNavigate, useLocation } from 'react-router-dom'

export function Login({ getUsers }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser, handleLogin } = useContext(UserContext);

    const queryClient = useQueryClient();
    const query = useQuery({ queryKey: [''], queryFn: getUsers })
    const navigate = useNavigate()
    const location = useLocation()

    // console.log(query.data)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await handleLogin({ email, password, user, setUser })

        if (success) {
            const redirectTo = location.state?.from || '/products';
            console.log('intentado')

            navigate(redirectTo, { replace: true });
        }
    }

    console.log(email, password)
    return (
        <div className='bg-black text-white p-8' >
            <h2>Login Account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit" onClick={handleSubmit}>Iniciar Sesion</button>
            </form>
        </div >

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