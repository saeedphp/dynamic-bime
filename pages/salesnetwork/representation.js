import Representation from "../../components/sales-network/representation";
import {BASE_URL} from "../../data/config";

const RepresentationPage = ({rules}) => {
    return (
        <Representation rules={rules}/>
    );
};

export async function getStaticProps() {
    const res = await fetch(BASE_URL + "api/v1.0/cms/representationCondition/active?pageIndex=0&pageSize=10", {
        headers: {
            'cultureLcid': 1065,
        }
    })
    const rules = (await res.json())['result']

    return {
        props: {
            rules,
        },
    }
}

export default RepresentationPage;