import { useState } from 'react'
import {
  Routes as BrowserRouter,
  Route,
} from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// UTILS
import { getProducts } from './utils/getProducts.jsx'
// import { getUsers } from './utils/getUsers.jsx'

// PAGES
import { Layout } from './pages/Layout.jsx'
import { Home } from './pages/Home.jsx'

import { Products } from './pages/Products.jsx'
import { ProductDetails } from './pages/ProductDetails.jsx'
import { ProductsCategory } from './pages/ProductsCategory.jsx'

import { Categories } from './pages/Category.jsx'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'

import { ErrorPage } from './pages/ErrorPage.jsx'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


async function getUsers() {
  const res = await fetch('https://api.escuelajs.co/api/v1/users');
  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }
  console.log(json)
  return json
}


function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>


        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/products/by/:categoryId' element={<ProductsCategory getProducts={getProducts} />}></Route>

          <Route path='/products' element={<Products getProducts={getProducts} />}></Route>
          <Route path='/products/:id' element={<ProductDetails getProducts={getProducts} />} exact></Route>




          <Route path="/login" element={<Login getUsers={getUsers} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />


          // EXTRA Routes
        </Route>

      </BrowserRouter>
    </QueryClientProvider>
  )
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







