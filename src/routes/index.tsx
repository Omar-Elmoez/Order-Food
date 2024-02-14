import { createBrowserRouter } from "react-router-dom";
import { Home, Products } from "../pages";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
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