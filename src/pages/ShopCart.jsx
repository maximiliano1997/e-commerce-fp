import React, { useContext } from 'react'
import { CartContext } from '../utils/ShoppingCartContext'
import { Link } from 'react-router-dom'

export function ShopCart() {
    const [cart, setCart] = useContext(CartContext)

    console.log(cart)

    const precioTotal = cart.reduce((sum, item) =>
        sum + item.cantidad * item.price, 0
    )

    return (
        <div className='text-white'>
            <h1 className='text-center font-bold text-white text-3xl m-5'>Shopping Cart</h1>
            {cart.length > 0 ? (<h2 className='text-center my-12'><a href="/successbuy" className='p-2 bg-green-500 hover:bg-green-700 rounded'>Ejecutar Compra total de: <span className='font-bold'>${precioTotal}</span></a></h2>) : (<h4 className='text-center font-bold'>¡Esperamos tus compras con ansiedad!</h4>)}
            <div className='flex justify-center m-8 gap-5'>


                {cart == 0 ? (
                    <div className='text-center font-bold text-3xl p-[250px]'>
                        <h1 className='text-red-500'>No hay nada agregado en el Carrito</h1>
                    </div>
                ) : (
                    <div className='flex justify-center m-8 gap-5'>
                        {cart.map(item => {

                            let hrColor = ''
                            if (item.category.name == 'Clothes') {
                                hrColor += 'blue-500'
                            } else if (item.category.name == 'Shoes') {
                                hrColor += 'yellow-600'
                            } else if (item.category.name == 'Electronics') {
                                hrColor += 'red-800'
                            } else if (item.category.name == 'Furniture') {
                                hrColor += 'green-800'
                            } else if (item.category.name == 'Miscellaneous') {
                                hrColor += 'orange-800'
                            }

                            return (
                                <>

                                    <div className='w-full max-w-[300px] bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                                        <div className='rounded-xl'>
                                            <a href="#" className='rounded-t-lg'>
                                                <img className='p-8 rounded-t-lg' src={item.images[0]} alt="" />
                                            </a>
                                        </div>
                                        <div>
                                            <span className='px-8 text-xl font-bold hover:text-green-400 dark:text-green-500'>Cantidad: {item.cantidad}</span>
                                        </div>
                                        <div className=' px-8 text-lg text-white font-bold'>
                                            <a href="#">
                                                <h5>
                                                    {item.title}
                                                </h5>
                                            </a>
                                        </div>
                                        <hr className={`w-[80%] m-auto border-[2px] border-${hrColor} hover:border-violet-500 hover:shadow-5`} />
                                        <div className='px-9 py-5 flex justify-between'>
                                            <span className='text-3xl font-bold text-gray-900 dark:text-white'>${item.price * item.cantidad}</span>
                                            <Link to={`/products/${item.id}`} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${hrColor} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Ver Detalles</Link >
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div >
                )}
            </div>
        </div >
    )
}
