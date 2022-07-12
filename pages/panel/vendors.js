import {Fragment} from "react";
import Vendors from "../../components/panel/vendors/vendors";
import {BASE_URL} from "../../data/config";

const VendorsPage = ({vendorsCat, vendors}) => {
    return (
      <Fragment>
          <Vendors vendorsCat={vendorsCat} vendors={vendors} />
      </Fragment>
    );
};

export async function getServerSideProps() {
    const res = await fetch(BASE_URL + 'api/v1.0/cms/representativePanelCategory/active?pageIndex=0&pageSize=10', {
        headers: {
            'cultureLcid': 1065,
        }
    })
    const vendorsCat = (await res.json())['result']

    const vendorsRes = await fetch(BASE_URL + 'api/v1.0/cms/representativePanel/active?pageIndex=0&pageSize=100', {
        headers: {
            'cultureLcid': 1065,
        }
    })
    const vendors = (await vendorsRes.json())['result']

    return {
        props: {
            vendorsCat,
            vendors
        },
    }
}

export default VendorsPage;