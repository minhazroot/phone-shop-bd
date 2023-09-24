import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This IS HOME PAGE </h1>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;