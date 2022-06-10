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
            {props.items.map((city, i) => (
                <CityItem
                    key={city.id}
                    branchName={city.branchName}
                    branchManager={city.branchManager}
                    phoneNumber={city.phoneNumber}
                    exactAddress={city.exactAddress}
                    postalCode={city.postalCode}
                />
            ))}
        </ul>
    );
};

export default CitiesList;