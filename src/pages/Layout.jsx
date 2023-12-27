import {
    Outlet,
    Link,
} from 'react-router-dom'
import { Logout } from '../utils/HandleLogout.jsx'
import Logo from '../assets/img/Logo.png'
import { useContext } from 'react';
import { UserContext } from '../App.jsx';

export function Layout() {
    const storedUser = localStorage.getItem('user');
    const { user } = useContext(UserContext)
    // const [user, setUser] = useState()

    return (
        <div className='bg-black'>
            {/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex space-x-8 border-2 border-white">

                                <li>
                                    <Link className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" to='/' >Home</Link>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Productos</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-[50px]">Categorias</a>
                                </li>
                            </div>
                            <div className="divider mr-[35px]"></div>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            < nav className="bg-white border-gray-200 dark:bg-gray-900 text-white" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <ul className="flex space-x-8">
                        <li><Link to='/' className='font-bold hover:text-green-500'>Home</Link></li>
                        <li><Link to='/products' className='font-bold hover:text-green-500'>Productos</Link></li>
                        <li><Link to='/categories' className='font-bold hover:text-green-500'>Categorias</Link></li>
                    </ul>
                    <ul className="flex space-x-5">
                        {storedUser ? (
                            <>
                                <li><Link to={`/userProfile`}
                                    className="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >Perfil</Link></li>
                                <li><Logout /></li>
                                {/* Otras opciones de usuario autenticado */}
                            </>
                        ) : (
                            <>
                                <li><Link to='/login'
                                    className="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
                                >Login</Link></li>
                                <li><Link to='/register'
                                    className="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
                                >Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav >

            <Outlet />



            <footer class="bg-black rounded-lg shadow dark:bg-gray-900 w-full h-full">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={Logo} class="h-8 w-[200px] h-[50px]" alt="Flowbite Logo" />
                            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Co.</span> */}
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">MarketGoods™</a>.  Maximiliano Imanol Aguer.</span>
                </div>
            </footer>


        </div>
    )
}