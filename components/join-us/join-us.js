import {Fragment} from "react";
import styles from './join-us.module.css';
import {NextSeo} from "next-seo";
import PageHeader from "../ui/page-header";
import imgPath from "../../public/images/page-header.webp";
import Title from "../ui/title";

const JoinUs = () => {
    return (
        <Fragment>
            <NextSeo title="دعوت به همکاری">

            </NextSeo>
            <PageHeader title="دعوت به همکاری" pageTitle="" pageLink="#" bg={imgPath}/>
            <section className={styles.joinus}>
                <Title>
                    تکمیل فرم درخواست همکاری
                </Title>
                <ul className={styles.list}>
                    <li>
                        شرکت بیمه آرمان به منظور تامین و تکمیل سرمایه انسانی مورد نیاز خود از واجدین شرایط پس از ثبت نام الکترونیکی و بر اساس اولویت های مورد نیاز، دعوت به مصاحبه می نماید.
                    </li>
                    <li>
                        ثبت نام فقط از طریق وب سایت شرکت بیمه آرمان انجام می شود، لذا از متقاضیان درخواست می شود به هیچ عنوان مدارکی به دفاتر و ادارات بیمه ارسال ننمایند.
                    </li>
                    <li>
                        چگونگی دعوت به مصاحبه بر اساس اولویت های مورد نیاز از طریق تلفن، پیامک و یا پست الکترونیکی به اطلاع خواهد رسید. لذا از متقاضیان درخواست می شود در ثبت شماره تلفن همراه و پست الکترونیکی خود دقت نمایند.
                    </li>
                    <li>
                        به منظور اشتغال در شرکت بیمه آرمان حداقل مدرک مورد تایید، مدرک کارشناسی معتبر و قابل استعلام از دانشگاه ها می باشد.
                    </li>
                </ul>
                <iframe src="https://samfa.armanins.com/bpmexpertengine/hr_jobRequest.aspx"></iframe>
            </section>
        </Fragment>
    )
};

export default JoinUs;