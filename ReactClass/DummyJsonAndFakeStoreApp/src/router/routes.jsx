import {createBrowserRouter} from 'react-router';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import FakeStoreLayout from "../components/layout/FakeStoreLayout.jsx";
import HomePage from "../components/HomePage/Homepage.jsx";
import DummyStoreLayout from "../components/layout/DummyStoreLayout.jsx";
import CombinedProducts from "../components/products/CombinedProducts.jsx";
import CartStoreLayout from "../components/layout/CartStoreLayout.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path:"/all_products",
        element: <CombinedProducts />
    },
    {
        path:"/header",
        element: <Header />
    },
    {
        path:"/footer",
        element: <Footer />
    },
    {
        path:"/fake_store_products",
        element: <FakeStoreLayout />
    },
    {
        path:"/dummy_store_products",
        element: <DummyStoreLayout />
    },
    {
        path:"/cart",
        element: <CartStoreLayout />
    }
]);

export default router;