import {Fragment} from "react";
import Personel from "../../components/about/personel/personel";

const PersonelPage = ({jobs, users}) => {
    return (
        <Fragment>
            <Personel jobs={jobs} users={users} />
        </Fragment>
    );
};

export async function getServerSideProps() {
    const res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/jobPosition/active?pageIndex=0&pageSize=10', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const jobs = (await res.json())['result']

    const user_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/user/active?pageIndex=0&pageSize=20', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const users = (await user_res.json())['result']

    return {
        props: {
            jobs,
            users
        }
    }
}

export default PersonelPage;