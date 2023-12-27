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
            <h1 className='text-center font-bold text-[33px] pb-[15px] text-green-500'>Login Account</h1>
            <p className='text-center font-bold'>¡Inicia Sesion para disfrutar de lo mejor de MARKETGOODS!</p>
            <form onSubmit={handleSubmit} className='max-w-sm mx-auto my-[111px] p-12 border-2 border-green-500 rounded-xl'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required />
                </label>
                <br />
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required />
                </label>
                <br />
                <div className='w-[100%]'>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800'
                    >Iniciar Sesion</button>
                </div>
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