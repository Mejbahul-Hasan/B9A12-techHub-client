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
import ProductReviewQueue from "../pages/Dashboard/Moderator/ProductReviewQueue";
import ReportedContents from "../pages/Dashboard/Moderator/ReportedContents";
import Statistics from "../pages/Dashboard/Admin/Statistics";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons";
import UpdateProduct from "../pages/UpdateProduct";

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
            {
                path: '/update-product/:id',
                element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/product-details/${params.id}`),
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          {
            path: 'my-profile',
            element: <PrivateRoute><MyProfile /></PrivateRoute>,
          },
          {
            path: 'add-product',
            element: <PrivateRoute><AddProduct /></PrivateRoute>,
          },
          {
            path: 'my-products',
            element: <PrivateRoute><MyProduct /></PrivateRoute>,
          },
          {
            path: 'product-review-queue',
            element: <PrivateRoute><ProductReviewQueue /></PrivateRoute>,
          },
          {
            path: 'reported-content',
            element: <PrivateRoute><ReportedContents /></PrivateRoute>,
          },
          {
            path: 'statistics',
            element: <PrivateRoute><Statistics /></PrivateRoute>,
          },
          {
            path: 'manage-users',
            element: <PrivateRoute><ManageUsers /></PrivateRoute>,
          },
          {
            path: 'manage-coupons',
            element: <PrivateRoute><ManageCoupons /></PrivateRoute>,
          },
        ],
      },
]);