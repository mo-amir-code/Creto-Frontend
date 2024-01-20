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
          {
            path:"/user/profile",
            element:<UserProfilePage />
          },
          {
            path:"p/:productId",
            element:<ProductDetailsPage />
          },
          {
            path:"user/cart",
            element:<CartPage />
          },
          {
            path:"user/wishlist",
            element:<WishlistPage />
          },
          {
            path:"user/cart/checkout",
            element:<CheckoutPage />
          },
          {
            path:"user/cart/checkout/payment/:status",
            element:<PaymentStatusPage />
          },
          {
            path:"auth",
            element:<AuthLayout />,
            children:[
              {
                path:"signin",
                element:<SignInPage />
              },
              {
                path:"signup",
                element:<SignUpPage />
              },
              {
                path:"verify",
                element:<VerifyPage />
              },
            ]
          },
          {
            path:"*",
            element:<_404Page />
          },
        ]
    },
    {
      path: "*",
      element:<_404Page />
    }
  ])

  
  return (
    <RouterProvider router={routers} /> 
  )
}

const HomeLayout = Loadable(lazy(()=>import("../layouts/HomeLayout")));
const AuthLayout = Loadable(lazy(()=>import("../layouts/AuthLayout")));
const HomePage =  Loadable(lazy(()=>import("../pages/HomePage")));
const ShopPage =  Loadable(lazy(()=>import("../pages/ShopPage")));
const WishlistPage =  Loadable(lazy(()=>import("../pages/WishlistPage")));
const ContactPage =  Loadable(lazy(()=>import("../pages/ContactPage")));
const UserProfilePage =  Loadable(lazy(()=>import("../pages/UserProfile")));
const ProductDetailsPage =  Loadable(lazy(()=>import("../pages/ProductDetails")));
const CartPage =  Loadable(lazy(()=>import("../pages/CartPage")));
const CheckoutPage =  Loadable(lazy(()=>import("../pages/CheckoutPage")));
const PaymentStatusPage =  Loadable(lazy(()=>import("../pages/PaymentStatusPage")));
const SignInPage =  Loadable(lazy(()=>import("../pages/SigninPage")));
const SignUpPage =  Loadable(lazy(()=>import("../pages/SignupPage")));
const VerifyPage =  Loadable(lazy(()=>import("../pages/VerifyPage")));
const _404Page =  Loadable(lazy(()=>import("../components/_404")));



export default Routes
