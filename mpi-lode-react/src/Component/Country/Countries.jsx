import { useEffect } from "react";
import { useState } from "react";
import Component from "../Component";
import './Countryes.css'


const Countries = () => {
    const [country, setcountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountry(data))


    }, [])
    return (
        <div >
            <h3>Countries:{country.length}</h3>
            <div className="Countryes_Contener">
                {
                    country.map(Country => <Component key={Country.ccn3} country={Country}></Component>)
                }
            </div>

        </div>
    );
};

export default Countries;