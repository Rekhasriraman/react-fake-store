import { useState, useEffect } from 'react';
import axios from 'axios';

import './Phones.css';

import Loader from './Loader';
import Phone from './Phone';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPhones = async () => {
            try {
                const res = await axios.get(
                    'https://dummyjson.com/products/category/smartphones'
                );
                if (res.status === 200) {
                    setPhones(res.data.products);
                } else {
                    throw new Error(
                        `Failed to fetch phones with status : ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPhones();
    }, []);
    return (
        <div className="phones">
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {!error &&
                phones.map((phone) => <Phone key={phone.id} phone={phone} />)}
        </div>
    );
};

export default Phones;