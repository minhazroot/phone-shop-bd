import { useLoaderData } from "react-router-dom";


const UserDetels = () => {
    const User = useLoaderData();
    const { name, website } = User;
    return (
        <div>
            <h1>Name :-{name}</h1>
            <p>Begit us :{website}</p>
            <h1> User detels Disolay </h1>
        </div>
    );
};

export default UserDetels;