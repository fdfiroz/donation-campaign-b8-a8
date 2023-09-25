import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetail from "../pages/DonationDitail/DonationDetail";

const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
            
            },
            {
                path : "/donation",
                element: <Donation></Donation>,
            
            },
            {
                path : "/statistics",
                element: <Statistics></Statistics>,
                loader:()=>fetch('/data.json')
            },
            {
                path : "*",
                element: <ErrorPage></ErrorPage>,
            },
            {
                path:"/donations/:id",
                element: <DonationDetail></DonationDetail>,
                loader:()=>fetch('/data.json')
            }
        
        ]

    }
])

export default myCreatedRoute

