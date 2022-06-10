import React, {Fragment, useEffect, useState} from 'react';
import {allCities} from "../../../data/cities";
import styles from './cities-filter.module.css';
import Earth from "../../icons/earth";
import ArrowDown from "../../icons/arrow-down";
import {BASE_URL} from "../../../data/config";

const CitiesFilter = (props) => {

    const [states, setState] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/basicdata/state/active", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setState(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

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
                    {states.map((city) => (
                        <option key={city.id} value={city.name}>
                            {city.name}
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