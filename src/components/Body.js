import { Outlet } from "react-router-dom"
import Maincontainer from "./Maincontainer"
import SideBar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex">
            <SideBar/>
            <Outlet/>
        </div>
    )
}
export default Body