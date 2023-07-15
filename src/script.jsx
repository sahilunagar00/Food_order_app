import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/heder'

import './style.css';
import Body from './pages/body/body';
import Footer from './components/footer/footer';
import About from './pages/about/about'
import Error from './components/error/error'
import Offers from './pages/offers/offers'
import Cart from './pages/cart/cart'
import RestorentDetail from './components/restorentdetail/resorentDeteil'
import { Provider } from 'react-redux'
import store from './utils/store'

import {  RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
var root = ReactDOM.createRoot(document.getElementById('root'));


function Applayout(){
    return(
        <Provider  store={store}>
        <>
        <Header />
        <Outlet/>
        <Footer />
        </>
        </Provider>
    );
}
const rout = createBrowserRouter([
    {
        path:'',
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/ABOUT',
                element:<About/>
            },
            {
                path:'/HOME',
                element:<Body/>
            },
            {
                path:'/OFFERS',
                element:<Offers/>
            },
            {
                path:'/CART',
                element:<Cart/>
            },
            {
                path:'RESTORENTS/:id',
                element:<RestorentDetail/>
            }
        ]
        

    },
    {
        path:'/about',
        element:<About/>
    }
])



root.render(
    <>
       {/* <Applayout/> */}
       <RouterProvider router={rout}/>
    </>
);