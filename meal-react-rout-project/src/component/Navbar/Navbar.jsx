import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="text-4xl flex  gap-x-10 justify-center">
            <Link to="/">HOME</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Items">ITEMS</Link>


        </nav>
    );
};

export default Navbar;