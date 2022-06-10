import React, { useState } from 'react';
import CitiesList from "./cities-list";
import CitiesFilter from "./cities-filter";

const Cities = (props) => {
    const [filteredCity, setFilteredCity] = useState('تهران');

    const filterChangeHandler = (selectedCity) => {
        setFilteredCity(selectedCity);
    };

    const filteredCities = props.items.filter((city) => {
        return city.stateInfo.name === filteredCity;
    });

    return (
        <div>
            <div>
                <CitiesFilter
                    selected={filteredCity}
                    onChangeFilter={filterChangeHandler}
                />
                <CitiesList items={filteredCities} />
            </div>
        </div>
    );
};

export default Cities;