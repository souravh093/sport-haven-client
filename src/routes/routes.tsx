import MainLayout from "@/components/layout/MainLayout";
import AllProducts from "@/pages/all-products/AllProducts";
import Home from "@/pages/home/Home";
import ManageProducts from "@/pages/manage-products/ManageProducts";
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
      }
    ],
  },
]);

export default router;
