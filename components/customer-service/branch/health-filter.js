import React from 'react';
import {allCities} from "../../../data/cities";
import styles from './health-filter.module.css';
import Earth from "../../icons/earth";
import ArrowDown from "../../icons/arrow-down";

const HealthFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const cityList = allCities();

    return (
        <>
            <div className={styles.wrapper}>
                <Earth />
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {cityList.map((city) => (
                        <option key={city.id} value={city.city}>
                            {city.city}
                        </option>
                    ))}
                </select>
                <span>
                    <ArrowDown />
                </span>
            </div>
        </>
    );
};

export default HealthFilter;