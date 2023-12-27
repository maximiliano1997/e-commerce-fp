import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { UserContext } from '../App';


export function Profile({ getUsers }) {
    // const { user } = useContext(UserContext)
    const storedUser = localStorage.getItem('user');

    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : {
        email: '',
        password: '',
        token: ''
    })
    const navigate = useNavigate()
    // const location = useLocation()


    if (!storedUser) {
        const redirectTo = '/';
        console.log('Cerrando Sesion....')

        navigate(redirectTo, { replace: true });

    }

    const userPass = user.password

    const queryClient = useQueryClient();
    const query = useQuery({ queryKey: ['users'], queryFn: getUsers })

    // const data = query.data
    console.log(query.data)
    console.log(user)
    // const storage = JSON.parse(localStorage.getItem("user"))

    const filteredUsers = query.data?.filter((apiUser) => apiUser.password === userPass);
    if (filteredUsers && user) {
        console.log(filteredUsers)
        return (
            <>
                <div>
                    <h1 className='text-[50px] text-white text-center'>Perfil de Usuario</h1>
                    {filteredUsers.map((profile) => {

                        return (

                            <div className=' my-[50px]'>

                                <div className='flex justify-center px-10 py-10 bg-black'>
                                    <div className='w-full max-w-[50%] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>

                                        <div className='w-[700px] rounded-xl flex'>
                                            <a href="#" className='w-[350px] rounded-t-lg'>
                                                <img className='p-8 rounded-t-lg' src={profile.avatar} alt="" />
                                            </a>
                                            <div className='w-[350px] p-8 text-white text-left flex-column space-y-8'>
                                                <div className='text-[33px] text-white font-bold'>
                                                    <a href="#">
                                                        <h5 className='text-green'>
                                                            Name:  {profile.name}
                                                        </h5>
                                                    </a>
                                                </div>
                                                <p className='text-lg'>
                                                    Email: {profile.email}
                                                </p>
                                                <p className='font-bold'>
                                                    Password: {profile.password}
                                                </p>
                                                <p className='font-bold'>
                                                    User Role: {profile.role}
                                                </p>
                                                <p className='font-bold'>
                                                    User ID: {profile.id}
                                                </p>
                                            </div>
                                        </div>

                                        <hr className={`w-[80%] m-auto border-[2px] hover:border-violet-500 hover:shadow-5`} />
                                        <div className='px-9 py-5 flex justify-between'>
                                            {/* <span className='text-3xl font-bold text-gray-900 dark:text-white'>${parseInt(product.price)}</span> */}
                                            <div className='flex gap-5'>
                                                {/* <Link to={`/products/edit/${product.id}`} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Edit
                                                </Link> */}
                                                {/* <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={() => deleteProduct(id, navigate)}
                                                >
                                                    Delete
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )

    }
}
