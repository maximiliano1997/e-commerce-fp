

export async function handleProductCreation({ title, price, description, categoryId, images }) {
    console.log('Creation Product working')

    console.log('POST request preview:  ', {
        'title': title,
        'price': parseInt(price),
        'description': description,
        'categoryId': parseInt(categoryId),
        'images': [`${images}`]
    })

    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': title,
                'price': price,
                'description': description,
                'categoryId': categoryId,
                'images': [`${images}`]
            }),
        });

        if (!response.ok) {
            console.error('Creacion de Producto Fallido!!...', response.status, response.statusText)
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