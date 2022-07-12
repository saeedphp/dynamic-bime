import SalesNetWork from "../../components/sales-network/sales-network";
import {BASE_URL} from "../../data/config";

const Rules = ({rules}) => {
    return (
        <SalesNetWork rules={rules} />
    );
};

export async function getServerSideProps() {
    const res = await fetch(BASE_URL + "api/v1.0/cms/generalRule/active?pageIndex=0&pageSize=12", {
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

export default Rules;