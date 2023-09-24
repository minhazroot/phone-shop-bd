import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetelsCard from "./PhoneDetelsCard";


const PhoneDetels = () => {
    const [phone, setPhone] = useState({}) //step (3)store single phone

    const { id } = useParams(); // step (1) get phone id  

    const Phones = useLoaderData()  // step (2) get  all phones details 

    //step (4) find single data form all data 
    useEffect(() => {
        const FindPhone = Phones?.find(phone => phone.id == id);
        setPhone(FindPhone) //step  (5) set FindPhone  in setPhone 

    }, [id, Phones])
    // console.log(phone)
    return (
        <div>
            <PhoneDetelsCard Phone={phone}></PhoneDetelsCard>
        </div>
    );
};

export default PhoneDetels;