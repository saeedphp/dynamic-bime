import {Fragment} from "react";
import {NextSeo} from "next-seo";
import PageHeader from "../ui/page-header";
import imgPath from "../../public/images/page-header.webp";
import styles from './renew-agent-license.module.css';
import Title from "../ui/title";

const RenewAgentLicense = () => {
    return (
        <Fragment>
            <NextSeo title="درخواست تمدید پروانه نمایندگی">

            </NextSeo>
            <PageHeader title="درخواست تمدید پروانه نمایندگی" pageTitle="شبکه فروش" pageLink="#" bg={imgPath}/>
            <section className={styles.renew}>
                <Title>
                    ثبت درخواست تمدید پروانه نمایندگی
                </Title>
                <iframe src="https://samfa.armanins.com/samfaproject/bpmexpertengine/AP_AgancyContinuation.aspx"></iframe>
            </section>
        </Fragment>
    )
};

export default RenewAgentLicense;