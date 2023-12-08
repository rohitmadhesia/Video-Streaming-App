import { useSelector } from "react-redux"

const SideBar = () => {
 
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    
    if(!isMenuOpen) return null

    return (
        <div className="w-48 shadow-lg p-5">
            <h1>Subscribtions</h1>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <h1>Subscribtions</h1>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <h1>Subscribtions</h1>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
    )
}
export default SideBar