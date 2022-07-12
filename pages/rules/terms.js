import {Fragment} from "react";
import Terms from "../../components/rules/terms/terms";
import {BASE_URL} from "../../data/config";
import GeneralConditionsPage from "./generalconditions";

const TermsPage = ({terms}) => {
    return (
      <Fragment>
          <Terms terms={terms} />
      </Fragment>
    );
};

export async function getServerSideProps() {
    const res = await fetch(BASE_URL + 'api/v1.0/cms/regulation/active?pageIndex=0&pageSize=100', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const terms = (await res.json())['result']


    return {
        props: {
            terms,
        },
    }
}

export default TermsPage;