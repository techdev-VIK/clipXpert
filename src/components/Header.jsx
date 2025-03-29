import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {


   const dispatch = useDispatch();

   const toggleMenuHandler = () => {
        dispatch(toggleMenu());
   }

    return (
        <div className="grid grid-flow-col m-2 p-3 shadow">
            
        <div className="flex col-span-1">
            <img 
            onClick={() => toggleMenuHandler()}
            className="h-11 cursor-pointer" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" alt="menu"/>

            <h1 className="text-2xl font-bold text-blue-500 mt-1 ">clipXpert</h1>
        </div>

            <div className="col-span-10 text-center mt-1">
            <input type="text" className="w-1/2 border border-gray-400 p-1 rounded-l-full"/>
            <button className="border border-gray-400 py-1 px-4 rounded-r-full bg-gray-100">🔍</button>
            </div>

            <div className="col-span-1">
            <img className="h-11" src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" />
            </div>

        </div>
    )
}


export default Header;