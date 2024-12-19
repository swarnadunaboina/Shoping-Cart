import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp_Page from './pages/SignUp_Page'
import Login_Page from './pages/Login_Page'
import { Provider } from 'react-redux';
import store from './redux/store';
import Slider from '../src/components/SliderComponent';
import DashBoard_LoginPage from './pages/DashBoard_LoginPage'
import DashBoard_LogoutPage from './pages/DashBoard_LogoutPage'
import AddToCart from './pages/AddToCart_Page'
import SingleProductLogin_Page from './pages/SingleProductLogin_Page';
import Products_Login_page from './pages/Products_Login_Page';
import Products_Logout_page from './pages/Products_Logout_Page';
import Size_Container from './components/Sizes_Component/size_container';
import SingleProductLogout_Page from './pages/SingleProductsLogout';
import FavoriteProducts from './pages/FavouriteProduct_Page';
//import Search from './Search';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =createBrowserRouter([
  {
    path: "/shoppingCart",
    element: <DashBoard_LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUp_Page/>,
  }, 
  {
    path: "/size",
    element: <Size_Container/>,
  }, 
  {
    path: "/login",
    element: <Login_Page/>,
  },
  {
    path: "/shoppingCartDashboard",
    element: <DashBoard_LogoutPage/>,
  },
  {
    path: "/loginProducts",
    element: <Products_Login_page/>
  },
  {
    path: "/logoutProducts",
    element: <Products_Logout_page/>
  },
  {
    path: "/slider",
    element: <Slider/>,
  },
  {
    path: "/singleProductLogin",
    element:<SingleProductLogin_Page/>,
  },
  {
    path: "/singleProductLogout",
    element:<SingleProductLogout_Page/>,
  },
  {
    path: "/cart",
    element: <AddToCart/> ,
  },
  {
    path: "/favorites",
    element: <FavoriteProducts/> ,
  },
]);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
