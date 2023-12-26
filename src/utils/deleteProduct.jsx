// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'

// const useRedirect = () => {
//     const navigate = useNavigate();

//     const redirectTo = (path, { replace = false } = {}) => {
//         if (replace) {
//             navigate(path, { replace: true });
//         } else {
//             navigate(path);
//         }
//     };

//     return { redirectTo };
// };

// export async function deleteProduct({ id }) {
//     console.log('deleting product...of ID: ', id)
//     const url = `https://api.escuelajs.co/api/v1/products/${parseInt(id)}`
//     const { redirectTo } = useRedirect();


//     try {
//         const responseDel = await fetch(url, {
//             method: 'DELETE',
//         });

//         if (!responseDel.ok) {
//             const data = await responseDel.json();
//             console.log('Response: ', data)
//             console.log('Error Message: ', data.message)
//             throw new Error('Error en Delete...')
//         }
//         console.log('DELETE fue exitoso')
//         if (id) {
//             const redirectToPath = '/products';
//             console.log('Redireccionando');

//             redirectTo(redirectToPath, { replace: true });
//         }
//     } catch (error) {
//         console.error('Fallo en el Delete....', error)
//         console.log(error.message)
//     }
// }
