import { useLoaderData } from "react-router-dom";
import Userr from "../Userr/Userr";



const User = () => {
    const users = useLoaderData();

    return (
        <div>

            <h1 className="text-3xl ">This is user page {users.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" >
                {
                    users.map(user => <Userr key={user.id} Userr={user}> </Userr>)
                }
            </div>
        </div>
    );
};

export default User;