import { createBrowserRouter } from "react-router-dom";
import { Home, Products, ErrorPage, ProductDetail } from "../pages";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home  />
      },
      {
        path: "/products",
        element: <Products  />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      }
    ]
  }
])

export default router