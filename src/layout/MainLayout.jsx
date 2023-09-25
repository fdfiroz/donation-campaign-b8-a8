import { Outlet } from "react-router-dom"
import Navbar from "../Components/Header/Navbar/Navbar"
import Footer from "../pages/Footer/Footer"

const MainLayout = () => {
  return (<>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
  )
}

export default MainLayout