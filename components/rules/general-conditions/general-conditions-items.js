import {Fragment, useState} from "react";
import Accordion from "../../ui/accordion";

const GeneralConditionsItems = (props) => {

    const {id, title, description} = props;

    return (
        <Fragment>

            <Accordion
                key={id}
                question={title}
                answer={description}
            />

        </Fragment>
    );
};

export default GeneralConditionsItems;