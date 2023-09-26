import { useState, useEffect } from 'react';
import axios from 'axios';

import './Groceries.css';

import Loader from './Loader';
import Grocery from './Grocery';

const Groceries = () => {
    const [groceries, setGroceries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getGroceries = async () => {
            try {
                const res = await axios.get(
                    'https://dummyjson.com/products/category/groceries'
                );
                if (res.status >= 200 && res.status < 300) {
                    setGroceries(res.data.products);
                } else {
                    throw new Error(
                        `Failed to fetch groceries with status: ${res.status}`
                    );
                }
            } catch (err) {
                setError('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        getGroceries();
    }, []);

    return (
        <div className="groceries">
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {!error &&
                groceries.map((grocery) => (
                    <Grocery key={grocery.id} grocery={grocery} />
                ))}
        </div>
    );
};

export default Groceries;