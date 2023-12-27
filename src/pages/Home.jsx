import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <div className="text-center">
                <div className="p-[100px]">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Oportunidades te esperan en MarkeGroods</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">MarkeGroods ofrece oportunidades únicas en compras online, con descuentos exclusivos y productos irresistibles para descubrir.</p>
                    <Link to='/products' className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Ir al Productos
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center px-12">
                        <div className='bg-black'>
                            <h1>Ofertas Shoes</h1>
                            <div className='px-12 grid grid-cols-3 grid-rows-2 gap-12 py-10 grid-flow-row auto-rows-auto'>
                                <Link to={`/products`} className='max-w-sm relative flex justify-center items-center w-[500px] h-[400px]'>
                                    <img src='https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/12/b6026471-1a15-42cc-82f4-32d4aee27c46.jpg' alt="" className='w-full h-full z-10 relative rounded-xl border-2 border-gray-900 hover:border-yellow-500 hover:border-4 hover:opacity-80' />
                                    <div className='absolute z-20 bg-gray-900 opacity-75 hover:bg-gray-900 transparent-2'>
                                        <h3 className='w-full z-20 text-center text-white font-bold text-xl p-5'>50% Discounts <br /> in Shoes</h3>
                                    </div>
                                </Link>
                                <Link to={`/products`} className='max-w-sm relative flex justify-center items-center w-[500px] h-[400px]'>
                                    <img src='https://www.zdnet.com/a/img/resize/d9f23f76d1911ef7faf2df15af8aa306ee9f03d8/2023/05/05/2b4dde9d-4e64-4d04-998d-da045a4bbfd9/zdnet-best-gaming-pcs.jpg?auto=webp&fit=crop&height=1200&width=1200' alt="" className='w-full h-full z-10 relative rounded-xl border-2 border-gray-900 hover:border-red-500 hover:border-4 hover:opacity-80' />
                                    <div className='absolute z-20 bg-gray-900 opacity-75 hover:bg-gray-900 transparent-2'>
                                        <h3 className='w-full z-20 text-center text-white font-bold text-xl p-5'>25% Discounts <br /> in Electronics</h3>
                                    </div>
                                </Link>
                                <Link to={`/products`} className='max-w-sm relative flex justify-center items-center w-[500px] h-[400px]'>
                                    <img src='https://static.asianpaints.com/content/dam/asian_paints/blog/wood/benefits-of-wooden-furniture/image-2-asian-paints-m.jpeg' alt="" className='w-full h-full z-10 relative rounded-xl border-2 border-gray-900 hover:border-green-500 hover:border-4 hover:opacity-80' />
                                    <div className='absolute z-20 bg-gray-900 opacity-75 hover:bg-gray-900 transparent-2'>
                                        <h3 className='w-full z-20 text-center text-white font-bold text-xl p-5'> 100% Best Quality <br /> in Furniture</h3>
                                    </div>
                                </Link>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </>
    )
}

