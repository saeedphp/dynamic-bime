import React, { useState } from 'react';
import CitiesList from "./cities-list";
import CitiesFilter from "./cities-filter";

const Cities = (props) => {
    // const [filteredCity, setFilteredCity] = useState('تهران');

    // const filterChangeHandler = (selectedCity) => {
    //     setFilteredCity(selectedCity);
    // };

    const filteredCities = props.items.filter((city) => {
        return city.stateInfo.name === props.filteredCity;
    });

    return (
        <div>
            <div>
                <CitiesFilter
                    // selected={filteredCity}
                    // onChangeFilter={filterChangeHandler}
                    citys={props.filteredCity}
                    Sitecity={props.Sitecity}
                    ShowShahr={props.ShowShahr}
                    showCity={props.showCity}
                />
                <CitiesList items={filteredCities} />
            </div>
        </div>
    );
};

export default Cities;