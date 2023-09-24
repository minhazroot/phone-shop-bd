import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <h1 className=" mt-5 text-center">This IS Home Page </h1>
            <Outlet className="text-center"></Outlet>
        </div>
    );
};

export default Home;