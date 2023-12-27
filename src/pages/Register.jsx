import { useState, useContext } from 'react';
import { UserContext } from '../App';

import { useNavigate } from 'react-router-dom'


export function Register() {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    })

    const navigate = useNavigate()
    // const location = useLocation()

    const { handleRegister } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const successRegistration = await handleRegister({ name: newUser.name, email: newUser.email, password: newUser.password, avatar: newUser.avatar })
        // console.log(successRegistration)
        if (successRegistration) {
            // const { id } = successCreation
            const redirectTo = `/successRegistration`
            console.log('Redireccionando')

            navigate(redirectTo, { replace: true });
        }
    }

    console.log(newUser)


    return (
        <div className='bg-black'>
            <div>

                <h1 className='text-center font-bold text-[33px] pt-[25px] text-yellow-500'>Register New Account</h1>
                <p className='text-white text-center font-bold pt-2'>¡Create una cuenta para realizar comprar en MARKETGOODS!</p>
                <form className='max-w-sm mx-auto my-[111px] p-12 border-2 border-yellow-500 rounded-xl'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        <p>Nombre: </p>
                        <input
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="text" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                    </label>
                    <br />
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        <p>Email: </p>
                        <input
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                    </label>
                    <br />
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        <p>Password: </p>
                        <input
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                    </label>
                    <br />
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        <p>Avatar URL: </p>
                        <input
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="text" onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })} />
                    </label>
                    <br />
                    <button
                        className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                        type="submit" onClick={handleSubmit}>Registrar</button>
                </form>
            </div>
        </div>
    )
}