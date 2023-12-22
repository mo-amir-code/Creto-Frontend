import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react"
import SuspenseLoader from "../components/loaders/SuspenseLoader"

const Loadable = (Component:React.FC) => (props:any) => {
  return (
    <Suspense fallback={<SuspenseLoader />} >
      <Component {...props} />
    </Suspense>
  )
}


const Routes = () => {
  const routers = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout />,
        children:[
          {
            path:"",
            element:<HomePage />
          },
          {
            path:"shop",
            element:<ShopPage />
          },
          {
            path:"contact",
            element:<ContactPage />
          },
        ]
    }
  ])

  
  return <RouterProvider router={routers} />
}

const HomeLayout = Loadable(lazy(()=>import("../layouts/HomeLayout")));
const HomePage =  Loadable(lazy(()=>import("../pages/HomePage")));
const ShopPage =  Loadable(lazy(()=>import("../pages/ShopPage")));
const ContactPage =  Loadable(lazy(()=>import("../pages/ContactPage")));



export default Routes
