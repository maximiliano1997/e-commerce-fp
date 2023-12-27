import { useState, createContext, useContext } from 'react'
import {
  Routes as BrowserRouter,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// UTILS
import { getProducts } from './utils/getProducts.jsx'
import { getCategories } from './pages/Category.jsx'
import { getUsers } from './utils/getUsers.jsx'
import { handleLogin } from './utils/handleLogin.jsx'
import { handleRegister } from './utils/handleRegister.jsx'
import { handleProductCreation } from './utils/handleProductCreation.jsx'

// PAGES
import { Layout } from './pages/Layout.jsx'
import { Home } from './pages/Home.jsx'

import { Products } from './pages/Products.jsx'
import { ProductDetails } from './pages/ProductDetails.jsx'
import { EditarProducto } from './pages/EditarProducto.jsx'
import { CrearProducto } from './pages/CrearProducto.jsx'

import { ProductsCategory } from './pages/ProductsCategory.jsx'

import { Categories } from './pages/Category.jsx'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'

import { ErrorPage } from './pages/ErrorPage.jsx'

import { Extra } from './pages/extra.jsx'

// Extra Pages
import { Profile } from './pages/Profile.jsx'
import { SuccessRegistration } from './pages/SuccessRegistration.jsx'
import { SuccessProductCreation } from './pages/SuccessProductCreation.jsx'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// async function getUsers() {
//   const res = await fetch('https://api.escuelajs.co/api/v1/users');
//   const json = await res.json();

//   if (json.error) {
//     throw new Error(json.error);
//   }
//   console.log(json)
//   return json
// }

export const UserContext = createContext()



function App() {
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : {
    email: '',
    password: '',
    token: ''
  })

  // const handleLogin = async ({ email, password }) => {
  //   console.log('working')
  //   console.log('Login attempt with:', email, password);

  //   // return true

  //   try {
  //     const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Error en intento de sesion');
  //     }

  //     const { token } = await response.json()

  //     setUser({ ...user, email: email, password: password })

  //     return true;

  //   } catch (error) {
  //     console.error('Error al iniciar sesion: ', error)

  //     return false;
  //   }
  // };

  console.log(user)

  const queryClient = new QueryClient();

  const value = {
    getCategories,
    user,
    setUser,
    handleLogin,
    handleRegister,
    handleProductCreation,
  }


  return (
    <UserContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>


          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path='/categories' element={<Categories />}></Route>
            <Route path='/products/by/:categoryId' element={<ProductsCategory getProducts={getProducts} />}></Route>

            <Route path='/products' element={

              <Products getProducts={getProducts} />

            }>
            </Route>


            <Route path='/products/:id' element={<ProductDetails getProducts={getProducts} />} exact></Route>
            <Route path='/products/edit/:id' element={
              <ProtectedRoute>
                <EditarProducto getProducts={getProducts} />
              </ProtectedRoute>
            } exact></Route>

            <Route path='/products/create' element={
              <ProtectedRoute>
                <CrearProducto />
              </ProtectedRoute>
            } exact></Route>



            <Route path="/extra" element={<Extra />} />

            <Route path="/login" element={<Login getUsers={getUsers} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />

            {/* // Extra PAGES */}
            <Route path="/userProfile" element={<Profile getUsers={getUsers} />} />
            <Route path="/successRegistration" element={<SuccessRegistration />} />
            <Route path="/successProductCreation" element={<SuccessProductCreation />} />

          </Route>

        </BrowserRouter>
      </QueryClientProvider >
    </UserContext.Provider >
  )
}

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext)
  const currentLocation = useLocation()
  // console.log(user)
  // let user = false
  console.log()
  if (user.email != 'admin' && user.password != 'admin') {
    return <Navigate to='/login' state={{ from: currentLocation }} replace />
  }
  return children
}

export default App



// /login
// /register
//    /
// /products
// /products/:id
// /products/create
// /products/edit/:id
// /cart-detail







