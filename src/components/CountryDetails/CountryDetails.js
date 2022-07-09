import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const { countryName } = useParams();

    return (
        <div>
            <h3>Country Detail: {countryName} </h3>
        </div>
    );
};

export default CountryDetails;