import PropTypes from 'prop-types';

import './Laptop.css';

const Laptop = ({ laptop }) => {
    return (
        <div className="laptop-container">
            <h2>{laptop.title}</h2>
            <div>
                <img src={laptop.images[0]} alt="" />
            </div>
            <p>{laptop.description}</p>
        </div>
    );
};

Laptop.propTypes = {
    laptop: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    })
};

export default Laptop;