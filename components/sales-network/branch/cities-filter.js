import React, {Fragment, useState} from 'react';
import {allCities} from "../../../data/cities";
import styles from './cities-filter.module.css';
import Earth from "../../icons/earth";
import ArrowDown from "../../icons/arrow-down";

const CitiesFilter = (props) => {

    const [selected, setSelected] = useState('تهران');

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        setSelected(selected);
    };

    const cityList = allCities();

    return (
        <>
            <div className={styles.wrapper}>
                <Earth />
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <div>
                        <input placeholder="search" type="text"/>
                    </div>
                    {cityList.map((city) => (
                        <option key={city.id} value={city.city}>
                            {city.city}
                        </option>
                    ))}
                </select>
                {/*<span>
                    {selected}
                </span>
                <ul>
                    {cityList.map((city) => (
                        <li value={city.city} key={city.id} onClick={() => setSelected(city.city)} >
                            {city.city}
                        </li>
                    ))}
                </ul>*/}
                <span>
                    <ArrowDown />
                </span>
            </div>
        </>
    );
};

export default CitiesFilter;