import PropTypes from 'prop-types';

import './Grocery.css';

const Grocery = ({ grocery }) => {
    return (
        <div className="grocery-container">
            <h2>{grocery.title}</h2>
            <div>
                <img src={grocery.images[0]} alt="" />
            </div>
            <p>{grocery.description}</p>
        </div>
    );
};

Grocery.propTypes = {
    grocery: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    })
};

export default Grocery;