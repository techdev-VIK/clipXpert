import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {

    const [searchQuery, setSearchQuery]= useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            searchCall()
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);


    const searchCall = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

        const response = await data.json();

        console.log(response.items)

    }


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

            <a href="/">
            <h1 className="text-2xl ms-6 font-bold text-blue-500 mt-1 ">clipXpert</h1>
            </a>
        </div>

            <div className="col-span-10 text-center mt-1">
            <input type="text" 
            className="w-1/2 border border-gray-400 p-1 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="border border-gray-400 py-1 px-4 rounded-r-full bg-gray-100">🔍</button>
            </div>

            <div className="col-span-1">
            <img className="h-11" src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" />
            </div>

        </div>
    )
}


export default Header;