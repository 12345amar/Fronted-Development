import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Context from './context/Context'
import './css/style.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import ProductDetails from './components/product/ProductDetails'
import ContactUs from './pages/ContactUs'
import Registration from './pages/Registration'



function App() {


 const myRouter = createBrowserRouter([
    { 
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'productDetails',
          element: <ProductDetails />
        },
        {
          path: 'contact',
          element: <ContactUs />
        }
       
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'registration',
      element: <Registration />
    }
  ])
  return (
    <Context>
      <RouterProvider router={myRouter} />
    </Context>
  );
}

export default App;
