import {Fragment, useState} from "react";
import styles from './general-conditions.module.css';
import PageHeader from "../../ui/page-header";
import bgHeader from '../../../public/images/page-header.webp';
import Card from "../../ui/card";
import Title from "../../ui/title";
import {getAllConditions} from "../../../data/conditions";
import GeneralConditionsItems from "./general-conditions-items";
import {NextSeo} from "next-seo";
import imgPath from "../../../public/images/page-header.webp";

const GeneralConditions = ({generalCon}) => {

    const allConditions = getAllConditions();

    return (
        <Fragment>
            <NextSeo title="شرایط عمومی بیمه نامه">

            </NextSeo>
            <PageHeader title="شرایط عمومی بیمه نامه" pageTitle="قوانین و مقررات" pageLink="" bg={bgHeader} />
            <Card className={styles.conditions}>
                <Title>
                    آیین نامه شماره ۷۷
                </Title>
                <p className={styles.desc}>
                    شورای‌عالی بیمه در اجرای ماده ۱۷ قانون تأسیس بیمه مرکزی ایران و بیمه‌گری و دستور‌العمل موضوع ماده ۱۳ آیین‌نامه اجرایی ماده ۹۱ قانون برنامه چهارم توسعه اقتصادی، اجتماعی و فرهنگی جمهوری اسلامی ایران، در جلسه مورخ 1391/08/30 «شرایط عمومی بیمه‌نامه مسافرتی اتباع خارجی متقاضی ورود به جمهوری اسلام  ایران» را مشتمل بر ۷ ماده به شرح ذیل تصویب نمود:
                </p>

                <div className={styles.wrapper}>
                    {generalCon.map((item) => (
                        <GeneralConditionsItems
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </Card>
        </Fragment>
    )
};

export default GeneralConditions;