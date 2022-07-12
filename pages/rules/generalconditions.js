import GeneralConditions from "../../components/rules/general-conditions/general-conditions";
import {BASE_URL} from "../../data/config";

const GeneralConditionsPage = ({generalCon}) => {
    return (
        <GeneralConditions generalCon={generalCon}/>
    );
};

export async function getServerSideProps() {
    const res = await fetch(BASE_URL + 'api/v1.0/cms/generalCondition/active?pageIndex=0&pageSize=100', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const generalCon = (await res.json())['result']


    return {
        props: {
            generalCon,
        },
    }
}

export default GeneralConditionsPage;