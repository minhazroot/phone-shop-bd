import { useEffect } from "react";
import { useState } from "react";


const Countries = () => {
    const [countri, setcountri] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountri(data))

    }, [])
    return (
        <div>
            <h3>Countries:{countri.length}</h3>
        </div>
    );
};

export default Countries;