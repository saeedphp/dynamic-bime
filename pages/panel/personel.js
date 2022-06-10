import {Fragment} from "react";
import Personel from "../../components/panel/personel/personel";
import {BASE_URL} from "../../data/config";
import Cookies from "universal-cookie";
import Login from "../../components/login/login";
const cookies = new Cookies();
const token = cookies.get('token');

const PersonelPage = ({personelCat,personel}) => {
    return (
        <Fragment>
            {token ? (
                <Personel personelCat={personelCat} personel={personel} />
            ) : (
                null
            )}
        </Fragment>
    )
};

export async function getStaticProps() {
    const res = await fetch(BASE_URL + 'api/v1.0/cms/personnelPanelCategory/active?pageIndex=0&pageSize=10', {
        headers: {
            'cultureLcid': 1065,
        }
    })
    const personelCat = (await res.json())['result']

    const personelRes = await fetch(BASE_URL + 'api/v1.0/cms/personnelPanel/active?pageIndex=0&pageSize=20', {
        headers: {
            'cultureLcid': 1065,
        }
    })
    const personel = (await personelRes.json())['result']

    return {
        props: {
            personelCat,
            personel
        },
    }
}

export default PersonelPage;