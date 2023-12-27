import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { UserContext } from '../App';

export function ProductDetails({ getProducts }) {
    const { id } = useParams()

    const { user } = useContext(UserContext)

    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['product'], queryFn: getProducts })

    const navigate = useNavigate();


    // console.log(query.data)
    async function deleteProduct(id, navigate) {
        console.log('deleting product...of ID: ', id)
        const url = `https://api.escuelajs.co/api/v1/products/${parseInt(id)}`


        try {

            if (user.password == 'admin') {
                const responseDel = await fetch(url, {
                    method: 'DELETE',
                });

                if (!responseDel.ok) {
                    const data = await responseDel.json();
                    console.log('Response: ', data)
                    console.log('Error Message: ', data.message)
                    throw new Error('Error en Delete...')
                }
                console.log('DELETE fue exitoso')

                return navigate('/products', { replace: true });
            } else {
                const redirectTo = '/';

                navigate(redirectTo, { replace: true });
            }
        } catch (error) {
            console.error('Fallo en el Delete....', error)
            console.log(error.message)
        }
    }


    const product = query.data?.find(product => product.id == id)

    if (product) {
        // console.log(product)

        return (
            <div className='my-[50px]'>

                <div className='flex justify-center px-10 py-10 bg-black'>
                    <div className='w-full max-w-[50%] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <div className='px-8 text-[33px] text-white font-bold'>
                            <a href="#">
                                <h5>
                                    {product.title}
                                </h5>
                            </a>
                        </div>
                        <div className='w-[700px] rounded-xl flex'>
                            <a href="#" className='w-[350px] rounded-t-lg'>
                                <img className='p-8 rounded-t-lg' src={product.images[0]} alt="" />
                            </a>
                            <div className='w-[350px] p-8 text-white text-left flex-column space-y-8'>
                                <p className='text-lg'>
                                    {product.description}
                                </p>
                                <p className='font-bold'>
                                    Category: {product.category.name}
                                </p>
                            </div>
                        </div>

                        <hr className={`w-[80%] m-auto border-[2px] hover:border-violet-500 hover:shadow-5`} />
                        <div className='px-9 py-5 flex justify-between'>
                            <span className='text-3xl font-bold text-gray-900 dark:text-white'>${parseInt(product.price)}</span>
                            <div className='flex gap-5'>
                                <Link to={`/products/edit/${product.id}`} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Edit
                                </Link>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => deleteProduct(id, navigate)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }


    // product.map(prod => {
    //     return (
    //         <>
    //             <div>
    //                 {prod.title}
    //             </div>
    //         </>
    //     )
    // })
    // if (product) {

    //     return (
    // <div className='w-full max-w-[300px] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
    //     <div className='rounded-xl'>
    //         <a href="#" className='rounded-t-lg'>
    //             <img className='p-8 rounded-t-lg' src={product.images[0]} alt="" />
    //         </a>
    //     </div>
    //     <div className=' px-8 text-lg text-white font-bold'>
    //         <a href="#">
    //             <h5>
    //                 {product.title}
    //             </h5>
    //         </a>
    //     </div>
    //     <hr className={`w-[80%] m-auto border-[2px] border-${hrColor} hover:border-violet-500 hover:shadow-5`} />
    //     <div div className='px-9 py-5 flex justify-between'>
    //         <span className='text-3xl font-bold text-gray-900 dark:text-white'>${product.price}</span>
    //         <Link href="#" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${hrColor} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>See Product</Link>
    //     </div>

    // </div>
    //     )
    // }

}

// import { useParams, Link } from 'react-router-dom';
// import { useQuery, useQueryClient } from '@tanstack/react-query';

// export function ProductDetails({ getProducts }) {
//     const { id } = useParams();
//     const queryClient = useQueryClient();
//     const query = useQuery(['product'], getProducts);

//     if (query.isLoading) {
//         return <p>Loading...</p>; // Puedes mostrar un mensaje de carga mientras se obtienen los datos
//     }

//     if (query.error) {
//         return <p>Error: {query.error.message}</p>; // Puedes mostrar un mensaje de error si hay algún problema
//     }

//     const product = query.data?.find(product => product.id === id);

//     console.log(product.name)

//     if (product) {
//         return (
//             <div className='w-full max-w-[300px] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
//                 {/* Resto del código ... */}
//                 <h2>{product.name}</h2>
//             </div>
//         );
//     } else {
//         return <p>No se encontró el producto.</p>;
//     }
// }