import { useState, useContext } from 'react';
import { UserContext } from '../App';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'


export function CrearProducto() {
    const [producto, setProducto] = useState({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: []
    })
    const { getCategories, handleProductCreation } = useContext(UserContext)

    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['categories'], queryFn: getCategories })

    console.log(query.data)
    const navigate = useNavigate()
    // const location = useLocation()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const successCreation = await handleProductCreation({ title: producto.title, price: producto.price, description: producto.description, categoryId: producto.categoryId, images: [producto.images] })

        if (successCreation) {
            const redirectTo = '/successProductCreation'
            console.log('Redireccionando')

            navigate(redirectTo, { replace: true });
        }
    }

    console.log(producto)


    return (
        <div className='my-[50px]'>
            <h1 className='text-green-500 font-bold text-[33px] text-center'>Crear Producto</h1>
            <div className='flex justify-center px-10 py-10 bg-black'>
                <form className='w-full max-w-[50%] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center p-12'>
                    <div className='flex-column'>


                        <div className='px-8 py-2 text-[33px] text-white font-bold'>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Write your Title here..."
                                    className='text-black bg-gray-700 rounded-lg pl-2'
                                    value={producto.title}
                                    onChange={(e) => setProducto({ ...producto, title: e.target.value })}
                                />
                            </label>
                        </div>
                        <div className='w-[700px] rounded-xl flex'>
                            {/* <a href="#" className='w-[350px] rounded-t-lg'>
                                <input className='p-8 rounded-t-lg' src={product.images[0]} alt="" />
                            </a> */}
                            <div className='w-full p-8 text-white text-left flex-column'>
                                <label> URL Image: <br />
                                    <input
                                        type="text"
                                        className='w-full p-2 rounded-t-lg text-white bg-gray-700'
                                        placeholder="Write your URL image here..."
                                        value={producto.images[0]}
                                        onChange={(e) => setProducto({ ...producto, images: [e.target.value] })}
                                    />
                                </label>
                                <br />
                                <br />
                                <label className=''>
                                    Description:
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write your product description here..."
                                        value={producto.description}
                                        onChange={(e) => setProducto({ ...producto, description: e.target.value })}
                                    ></textarea>
                                </label>
                                <br />
                                <label className='w-full'>
                                    Select a Category:
                                    <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={producto.categoryId}
                                        onChange={(e) => setProducto((prevData) => ({ ...prevData, categoryId: e.target.value }))}
                                    >
                                        <option selected>Choose a category</option>
                                        {query.data?.map(category => {
                                            const id = category.id

                                            return (
                                                <>
                                                    <option value={id}>{category.name}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                </label>
                            </div>
                        </div>

                        <hr className={`w-[80%] m-auto border-[2px] hover:border-violet-500 hover:shadow-5`} />
                        <div className='px-9 py-5 flex justify-between'>
                            <label >
                                <span className='text-green-500 text-[33px]'>$ </span>
                                <input
                                    type="number"
                                    value={producto.price}
                                    placeholder="Write price here..."
                                    className='text-[33px] text-green-400 bg-gray-700 rounded-lg pl-2'

                                    onChange={(e) => setProducto({ ...producto, price: e.target.value })}
                                />
                            </label>
                            <div className='flex gap-5'>
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleSubmit}
                                >
                                    CREAR
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    // async function createProduct(id) {
    //     console.log(id)
    //     const url = `https://api.escuelajs.co/api/v1/products/${id}`
    //     try {
    //         const responseUpdate = await fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 'title': editData.title,
    //                 'images': [editData.images[0]],
    //                 'description': editData.description,
    //                 'price': parseInt(editData.price),
    //             }),

    //         })

    //         if (!responseUpdate.ok) {
    //             throw new Error('Error en update del producto: ')
    //         }

    //         const data = await responseUpdate.json();
    //         console.log('exito:', data)

    //         navigate(`/products/${id}`, { replace: true })
    //     } catch (error) {
    //         console.error('Error en la actualizacion del producto...', error)
    //     }
    // }
}



