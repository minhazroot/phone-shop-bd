import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <div className="mt-10 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;