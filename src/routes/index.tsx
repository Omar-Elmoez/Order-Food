import { createBrowserRouter } from "react-router-dom";
import { Home, Products, ErrorPage } from "../pages";
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
        element: <Products  />
      }
    ]
  }
])

export default router