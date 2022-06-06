import {Fragment} from "react";
import Brochure from "../../components/rules/brochure/brochure";

const BrochurePage = ({brochures}) => {
    return (
        <Fragment>
            <Brochure brochures={brochures} />
        </Fragment>
    )
};

export async function getStaticProps() {
    const res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/pdf/active?pageIndex=0&pageSize=20', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const brochures = (await res.json())['result']

    return {
        props: {
            brochures
        }
    }
}

export default BrochurePage;

