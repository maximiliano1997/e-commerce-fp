


export async function handleRegister({ name, email, password, avatar }) {
    console.log('Register working')
    // console.log('Login attempt with:', email, password);

    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password,
                'avatar': avatar
            }),
        });

        if (!response.ok) {
            console.error('Registro de usuario Fallido!!...', response.status, response.statusText)
            const data = await response.json();
            console.log('Response: ', data)
            console.log('Error Message: ', data.message)
            throw new Error('Failed register')
        }

        console.log('Account Created Succesfully!')
        const data = await response.json();
        console.log(data)
        // setNewUser(...newUser, name, email, password, avatar)
        // console.log(newUser)

        return true;
    } catch (error) {
        console.error('Error en intento de registro de usuario: ', error)

        return false;
    }

}