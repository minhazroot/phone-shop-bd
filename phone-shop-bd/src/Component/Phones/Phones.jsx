import Phone from "../Phone/Phone";
import PropTypes from 'prop-types';

const Phones = ({ phones }) => {
    // console.log(phones);
    return (
        <div className="mt-5">
            <h3 className="text-3xl text-center">All categories phones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    phones?.map(phone => <Phone key={phone.id} Phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.array,
};
export default Phones;