import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Bangladesh is my homeland: {countries.length}</h2>
            {
                countries.map(country => <li>
                    <Link
                        // key={country}
                        to={`/country/${country.name.common}`}
                    >{country.name.common}
                    </Link>
                </li>)

            }
        </div>
    );
};

export default Countries;