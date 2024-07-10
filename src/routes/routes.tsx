import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
   {
    path: "/",
    element: <MainLayout />,
    children: [
      {
         index: true,
         element: <Home />
      }
    ]
   }
])


export default router