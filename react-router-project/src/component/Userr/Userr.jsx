import { Link } from "react-router-dom";


const Userr = ({ Userr }) => {
    const { name, email, phone, id } = Userr;
    console.log(Userr);
    return (
        <div>
            <div className="border-2 flex flex-col justify-center items-center py-5 bg-slate-400 rounded-2xl text-white">
                <h3 className="text-3xl">{name}</h3>
                <h3 className="text-2xl">{email}</h3>
                <p>{phone}</p>
                <Link to={`/Userr/${id}`}>Sho DETELS </Link>
            </div>


        </div>
    );
};

export default Userr;