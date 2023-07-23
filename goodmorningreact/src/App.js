import './assests/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ToDoList from './components/ToDoList';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import Header from './components/Header';


function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about/:id',
          element: <AboutUs />
        },
        {
          path: '/contact',
          element: <ContactUs />
        },
         {
          path: '/portfolio',
          element: <Portfolio />
        },
         {
          path: '/todo',
          element: <ToDoList />
        }
      ]
    },
    
  ])

  return (
   <RouterProvider router={router} />
  );
}

export default App;
