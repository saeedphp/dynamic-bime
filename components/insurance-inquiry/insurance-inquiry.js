import {Fragment} from "react";
import styles from './insurance-inquiry.module.css';
import {NextSeo} from "next-seo";
import PageHeader from "../ui/page-header";
import imgPath from "../../public/images/page-header.webp";
import Title from "../ui/title";

const InsuranceInquiry = () => {
    return (
        <Fragment>
            <NextSeo title="استعلام بیمه نامه از بیمه مرکزی">

            </NextSeo>
            <PageHeader title="استعلام بیمه نامه از بیمه مرکزی" pageTitle="" pageLink="#" bg={imgPath}/>
            <section className={styles.inquiry}>
                <Title className={styles.title}>
                    بیمه گزاران محترم می توانید جهت استعلام اصالت انواع بیمه نامه های خود از سامانه سنهاب استفاده نمایید .
                </Title>
                <ul className={styles.list}>
                    <li>
                        شرکت بیمه گر انتخاب شود
                    </li>
                    <li>
                        شماره بیمه نامه چاپ شده روی بیمه نامه را در قسمت شماره بیمه نامه وارد نمایید
                    </li>
                    <li>
                        کد ملی بیمه گذار در مورد اشخاص حقیقی و کد شناسه ملی در مورد اشخاص حقوقی در قسمت کد ملی بیمه گذار وارد نمایید
                    </li>
                    <li>
                        شماره تلفن همراه خود را جهت اطلاع رسانی های بعدی وارد نمایید
                    </li>
                    <li>
                        کد امنیتی را به دقت وارد نمایید
                    </li>
                    <li>
                        دکمه استعلام را کلیک نمایید
                    </li>
                </ul>

                <iframe src="https://sanhabinq.centinsur.ir/#/query/InquiryWithUniqueCode"></iframe>

            </section>
        </Fragment>
    )
};

export default InsuranceInquiry;