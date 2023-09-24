import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <h3 className="text-3xl text-center">This is Navbar</h3>

            <nav className="flex gap-x-10 justify-center mt-5">
                <Link to="/">HOME</Link>
                <Link to="/About">About</Link>
                <Link to="/Contect">Contect</Link>
                <Link to="/USER">USER </Link>


            </nav>



        </div>
    );
};

export default Navbar;