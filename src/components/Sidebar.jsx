import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);


    //early return pattern

    if(!isMenuOpen) return null;

    return (
        <div className="p-5 shadow-lg w-48 shadow">

            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Videos</li>
                <li>Shorts</li>
                <li>Live</li>
            </ul>

            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Movies</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Music</li>
            </ul>


            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Movies</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Music</li>
            </ul>
        </div>
    )
}


export default Sidebar;