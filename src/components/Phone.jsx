import PropTypes from 'prop-types';

import './Phone.css';

const Phone = ({ phone }) => {
    return (
        <div className="phone-container">
            <h2>{phone.title}</h2>
            <div>
                <img src={phone.images[0]} alt="" />
            </div>
            <p>{phone.description}</p>
        </div>
    );
};

Phone.propTypes = {
    phone: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    })
};

export default Phone;