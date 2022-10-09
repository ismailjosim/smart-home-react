import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Cart from '../components/Cart';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Root from '../components/Root';
import Shop from '../components/Shop';
import { ProductAndCartData } from '../loaders/getCart&ProductsData';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // loader: () => fetch('products.json'),
        loader: ProductAndCartData,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);






export default router;
