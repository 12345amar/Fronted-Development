import './assests/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ToDoList from './components/ToDoList';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';


function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
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
  ])

  return (
   <RouterProvider router={router} />
  );
}

export default App;
