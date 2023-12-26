import {
    Link,
} from 'react-router-dom'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'

export async function getCategories() {
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
                <div className='px-[250px] grid grid-cols-3 grid-rows-5 gap-12 py-10 grid-flow-row auto-rows-auto'>
                    {query.data?.map((category) => {
                        const id = category.id
                        return (
                            // <div key={category.id} className='max-w-sm relative flex justify-center items-center'>
                            <Link to={`/products/by/${id}`} key={category.id} className='max-w-sm relative flex justify-center items-center w-[500px] h-[400px]'>
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