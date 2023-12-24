import { useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { useQuery, useQueryClient } from "@tanstack/react-query"


export function ProductsCategory({ getProducts }) {
    const { categoryId } = useParams()

    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['product'], queryFn: getProducts })

    // console.log(query.data)
    const { isLoading, isSuccess } = query;

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (!isSuccess) {
        return <p>Error al cargar los datos.</p>;
    }
    console.log(categoryId)

    const filteredProducts = query.data?.filter(product => Number(product.category.id) === Number(categoryId));
    console.log(filteredProducts)
    // const filteredProducts = true


    let respuesta = ''
    let respuestaColor = ''
    switch (categoryId) {
        case '1':
            respuesta += 'Clothes'
            respuestaColor += 'blue-500'
            break;
        case '2':
            respuesta += 'Electronics'
            respuestaColor += 'red-500'
            break;
        case '3':
            respuesta += 'Furniture'
            respuestaColor += 'green-500'
            break;
        case '4':
            respuesta += 'Shoes'
            respuestaColor += 'yellow-500'
            break;
        case '5':
            respuesta += 'Miscellaneous'
            respuestaColor += 'orange-600'
            break;
        default:
            break;
    }


    return (
        <>
            <div className="px-[200px] bg-black pb-5">
                <div className='py-10'>
                    <h1 className={`font-bold text-${respuestaColor} text-[33px]`}>Productos {categoryId ? '> Categoria > ' + respuesta : ''}</h1>
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    {filteredProducts ? (
                        <>
                            {filteredProducts.map((product) => {

                                let hrColor = ''
                                if (product.category.name == 'Clothes') {
                                    hrColor += 'blue-500'
                                } else if (product.category.name == 'Shoes') {
                                    hrColor += 'yellow-600'
                                } else if (product.category.name == 'Electronics') {
                                    hrColor += 'red-800'
                                } else if (product.category.name == 'Furniture') {
                                    hrColor += 'green-800'
                                } else if (product.category.name == 'Miscellaneous') {
                                    hrColor += 'orange-800'
                                }

                                return (
                                    <div className='w-full max-w-[300px] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                                        <div className='rounded-xl'>
                                            <a href="#" className='rounded-t-lg'>
                                                <img className='p-8 rounded-t-lg' src={product.images[0]} alt="" />
                                            </a>
                                        </div>
                                        <div className=' px-8 text-lg text-white font-bold'>
                                            <a href="#">
                                                <h5>
                                                    {product.title}
                                                </h5>
                                            </a>
                                        </div>
                                        <hr className={`w-[80%] m-auto border-[2px] border-${hrColor} hover:border-violet-500 hover:shadow-5`} />
                                        <div div className='px-9 py-5 flex justify-between'>
                                            <span className='text-3xl font-bold text-gray-900 dark:text-white'>${product.price}</span>
                                            <Link to={`${product.id}`} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${hrColor} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Ver Detalles</Link >
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            {query.data?.map((product) => {
                                console.log(product)


                                let hrColor = ''
                                if (product.category.name == 'Clothes') {
                                    hrColor += 'blue-500'
                                } else if (product.category.name == 'Shoes') {
                                    hrColor += 'yellow-600'
                                } else if (product.category.name == 'Electronics') {
                                    hrColor += 'red-800'
                                } else if (product.category.name == 'Furniture') {
                                    hrColor += 'green-800'
                                } else if (product.category.name == 'Miscellaneous') {
                                    hrColor += 'orange-800'
                                }

                                return (
                                    <div className='w-full max-w-[300px] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                                        <div className='rounded-xl'>
                                            <a href="#" className='rounded-t-lg'>
                                                <img className='p-8 rounded-t-lg' src={product.images[0]} alt="" />
                                            </a>
                                        </div>
                                        <div className=' px-8 text-lg text-white font-bold'>
                                            <a href="#">
                                                <h5>
                                                    {product.title}
                                                </h5>
                                            </a>
                                        </div>
                                        <hr className={`w-[80%] m-auto border-[2px] border-${hrColor} hover:border-violet-500 hover:shadow-5`} />
                                        <div div className='px-9 py-5 flex justify-between'>
                                            <span className='text-3xl font-bold text-gray-900 dark:text-white'>${product.price}</span>
                                            <Link to={`${product.id}`} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${hrColor} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>See Product</Link >
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )}
                </div>
            </div >
        </>
    )
}