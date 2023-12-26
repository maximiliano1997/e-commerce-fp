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

        const successCreation = await handleRegister({ name: newUser.name, email: newUser.email, password: newUser.password, avatar: newUser.avatar })

        if (successCreation) {
            const redirectTo = '/successRegistration'
            console.log('Redireccionando')

            navigate(redirectTo, { replace: true });
        }
    }

    console.log(newUser)


    return (
        <div className='bg-black'>
            <div>

                <h1>Register new Account</h1>
                <form className='text-white'>
                    <label>
                        <p>Nombre: </p>
                        <input type="text" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} className='text-black' />
                    </label>
                    <br />
                    <label>
                        <p>Email: </p>
                        <input type="email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className='text-black' />
                    </label>
                    <br />
                    <label>
                        <p>Password: </p>
                        <input type="password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} className='text-black' />
                    </label>
                    <br />
                    <label>
                        <p>Avatar: </p>
                        <input type="text" onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })} className='text-black' />
                    </label>
                    <br />
                    <button type="submit" onClick={handleSubmit}>Registrar</button>
                </form>
            </div>
        </div>
    )
}