
import './Country.css'
const Component = ({ country }) => {
    const { name, flags } = country;

    console.log(country);
    return (
        <div className="Country">
            <h3>Name :{name?.common}</h3>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Component;