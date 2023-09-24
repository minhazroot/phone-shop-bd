import { useLoaderData } from "react-router-dom";
import Banar from "../../Component/Navbar/Banar/Banar";
import Phones from "../../Component/Phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>


            <Banar ></Banar>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;