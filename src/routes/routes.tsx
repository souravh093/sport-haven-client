import OrderConfirmation from "@/components/general/OrderConfirmation";
import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/about/About";
import AllProducts from "@/pages/all-products/AllProducts";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import ManageProducts from "@/pages/manage-products/ManageProducts";
import SingleProduct from "@/pages/single-product/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/single-product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
    ],
  },
]);

export default router;
