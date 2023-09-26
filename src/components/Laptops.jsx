import { useState, useEffect } from 'react';
import axios from 'axios';

import './Laptops.css';

import Loader from './Loader';
import Laptop from './Laptop';

const Laptops = () => {
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLaptops = async () => {
            try {
                const res = await axios.get(
                    'https://dummyjson.com/products/category/laptops'
                );
                if (res.status === 200) {
                    setLaptops(res.data.products);
                } else {
                    throw new Error(
                        `Failed to fetch laptops with status : ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getLaptops();
    }, []);
    return (
        <div className="laptops">
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {!error &&
                laptops.map((laptop) => (
                    <Laptop key={laptop.id} laptop={laptop} />
                ))}
        </div>
    );
};

export default Laptops;