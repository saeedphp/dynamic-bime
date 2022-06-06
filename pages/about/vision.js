import {Fragment} from "react";
import Vision from "../../components/about/vision/vision";
import {BASE_URL} from "../../data/config";

const VisionPage = ({visionsAttr, visions}) => {
    return (
        <Fragment>
            <Vision visionsAttr={visionsAttr} visions={visions} />
        </Fragment>
    )
};

export async function getStaticProps() {
    const res = await fetch(BASE_URL + 'api/v1.0/cms/visionAttribute/active?pageIndex=0&pageSize=100', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const visionsAttr = (await res.json())['result']

    const visionsRes = await fetch(BASE_URL + 'api/v1.0/cms/vision/active?pageIndex=0&pageSize=10', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const visions = (await visionsRes.json())['result']

    return {
        props: {
            visionsAttr,
            visions
        },
    }
}

export default VisionPage;