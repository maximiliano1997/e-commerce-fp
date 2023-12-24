import {
    Link,
} from 'react-router-dom'

import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'

async function getProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const json = await res.json();

    if (json.error) {
        throw new Error(json.error);
    }

    return json
}

export function Products({ getProducts }) {
    // const { id: categoryId } = useParams()

    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['product'], queryFn: getProducts })

    // console.log(query.data)

    // const filteredProducts = query.data?.filter((product) => product.category.id.toString() === categoryId)

    return (
        <>
            <div className="px-[200px] bg-black">
                <h1>Productos</h1>
                <div className='grid grid-cols-4 gap-10'>
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
                </div>
            </div >

        </>
    )
}











import {
    Link,
} from 'react-router-dom'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'

async function getCategories() {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories')
    const json = await res.json();

    if (json.error) {
        throw new Error(json.error);
    }

    return json
}

export function Categories() {

    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['data'], queryFn: getCategories })

    console.log(query.data)
    return (
        <>
            <div className='bg-black'>
                <h1>category</h1>
                <div className='px-[250px] grid grid-cols-3 grid-rows-2 gap-12 py-10'>
                    {query.data?.map((category) => {
                        const id = category.id
                        return (
                            // <div key={category.id} className='max-w-sm relative flex justify-center items-center'>
                            <Link to={`/products/by/${id}`} key={category.id} className='max-w-sm relative flex justify-center items-center'>
                                <img src={category.image} alt="" className='w-full h-full z-10 relative rounded-xl border-2 border-gray-900 hover:border-blue-500 hover:border-4 hover:opacity-80' />
                                <div className='absolute z-20 bg-gray-900 opacity-75 hover:bg-gray-900 transparent-2'>
                                    <h3 className='w-full z-20 text-center text-white font-bold text-xl'>{category.name}</h3>
                                </div>
                            </Link>
                            // </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}