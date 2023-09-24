// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Banar from "./Banar/Banar";


const Navbar = () => {
    return (
        <div  >
            <div className="flex justify-between p-5 shadow-md mb-2" >
                <div>
                    <h1>Phone Shop</h1>
                </div>
                <div  >
                    <ul className=" flex gap-x-5 ml-5">
                        <li><NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline pb-2" : ""
                            }
                        >
                            HOME
                        </NavLink></li>
                        <li><NavLink to="/Favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline pb-2" : ""
                            }
                        >
                            Favorites
                        </NavLink></li>
                        <li><NavLink to="/Login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline pb-2" : ""
                            }
                        >
                            Login
                        </NavLink></li>
                    </ul>
                </div>
            </div>
            {/* <Banar></Banar> */}
        </div>
    );
};

export default Navbar;