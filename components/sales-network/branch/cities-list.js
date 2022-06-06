import React from 'react';
import CityItem from "./city-item";
import Title from "../../ui/title";

const CitiesList = (props) => {

    if (props.items.length === 0) {
        return (
            <Title>
                شعبه ای پیدا نشد!
            </Title>
        )
    }

    return (
        <ul>
            {props.items.map((city) => (
                <CityItem
                    key={city.id}
                    title={city.title}
                    manager={city.manager}
                    tel={city.tel}
                    address={city.address}
                    postCard={city.postCard}
                />
            ))}
        </ul>
    );
};

export default CitiesList;