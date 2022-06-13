import React, {useEffect, useState} from 'react';
import {allCities} from "../../../data/cities";
import styles from './health-filter.module.css';
import Earth from "../../icons/earth";
import ArrowDown from "../../icons/arrow-down";
import {BASE_URL} from "../../../data/config";
import IranMapData from '../../../data/IranMapData';

const HealthFilter = (props) => {

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

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const cityList = allCities();
    // const showCity = props.showCity;

    return (
        <>
            <div className={styles.wrapper}>
                <Earth />
                <select
                    // value={props.selected}
                    // onChange={dropdownChangeHandler}
                    defaultValue={props.citys}
                    onChange={props.Sitecity}
                    onClick={props.ShowShahr}
                >
                    {IranMapData.map((item) => (
                        <option
                            key={item.id}
                            value={item.name}
                        >
                            {props.showCity ? `${item.name}` : `${props.citys}`}
                            {/* {city.name} */}
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