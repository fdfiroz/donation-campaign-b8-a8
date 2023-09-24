import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

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
            },
            {
                path : "*",
                element: <ErrorPage></ErrorPage>,
            }
        
        ]

    }
])

export default myCreatedRoute

