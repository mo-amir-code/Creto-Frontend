import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"

const Routes = () => {
  const routers = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout />,
    }
  ])

  return <RouterProvider router={routers} />
}

export default Routes
