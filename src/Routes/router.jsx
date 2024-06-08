import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../pages/ProductsPage";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../pages/Dashboard/User/MyProfile";
import AddProduct from "../pages/Dashboard/User/AddProduct";
import MyProduct from "../pages/Dashboard/User/MyProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/product-details/${params.id}`),
            },
            {
                path: '/product-page',
                element: <ProductsPage />,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <MyProfile />,
          },
          {
            path: 'add-product',
            element: <AddProduct />,
          },
          {
            path: 'my-products',
            element: <MyProduct />,
          },
        ],
      },
]);