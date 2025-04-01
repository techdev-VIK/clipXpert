import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {

    const [searchQuery, setSearchQuery]= useState("");

    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            searchCall()
        }, 250);

        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);


    const searchCall = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

        const response = await data.json();

        console.log(response.items)

        setSearchSuggestions(response.items)

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

            <div className="col-span-10 mt-1">

            <input type="text" 
            className="w-1/2 border border-gray-400 rounded-l-full px-5 py-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearch(true)} onBlur={() => setShowSearch(false)} 
            />
            <button className="border border-gray-400 py-1 px-4 rounded-r-full bg-gray-100">🔍</button>


            {searchQuery.length>0 && searchQuery.trim() !== "" && showSearch && <div className="fixed bg-white py-2 px-5 w-[32rem] shadow-lg rounded-lg">
                <ul>
                    {searchSuggestions.map((search) => (
                        <li key={search.snippet.title} className="py-2 shadow-sm hover:bg-gray-100">🔍 {search.snippet.title}</li>
                    ))}
                </ul>
            </div>}
                  
            </div>

            <div className="col-span-1">
            <img className="h-11" src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" />
            </div>

        </div>
    )
}


export default Header;