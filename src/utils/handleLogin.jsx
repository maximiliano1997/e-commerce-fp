import { useContext } from 'react'
import { UserContext } from '../App';

export const handleLogin = async ({ email, password, user, setUser }) => {
    console.log('working')
    console.log('Login attempt with:', email, password);

    // return true

    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error('Error en intento de sesion');
        }

        const { token } = await response.json()

        setUser({ ...user, email: email, password: password })
        // function populateStorage() {
        //     localStorage.setItem("user", JSON.stringify(user));
        //     console.log(JSON.parse(localStorage.getItem("user")))
        // }
        // populateStorage()

        // const lol = JSON.parse(localStorage.getItem("user"))
        // if (lol) {
        //     return true
        // }
        localStorage.setItem('user', JSON.stringify({ email, password, token }));


        return true;

    } catch (error) {
        console.error('Error al iniciar sesion: ', error)

        return false;
    }
};