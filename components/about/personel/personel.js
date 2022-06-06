import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './personel.module.css';
import PersonelItem from "./personel-item";
import {NextSeo} from "next-seo";
import bgHeader from "../../../public/images/page-header.webp";

const Personel = ({jobs, users}) => {

    return (
        <Fragment>
            <NextSeo title="پرسنل و اعضای بیمه آرمان">

            </NextSeo>
            <PageHeader title="پرسنل و اعضای بیمه آرمان" pageTitle="درباره ما" pageLink="/about" bg={bgHeader} />
            <section className={styles.personel}>
                <ul>
                    <PersonelItem jobs={jobs} users={users} />
                </ul>
            </section>
        </Fragment>
    );
};

export default Personel;