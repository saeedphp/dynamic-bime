import React, {Fragment} from "react";
import styles from "./health-list.module.css";
import Link from "next/link";
import DownloadBranch from "../../icons/download-branch";
import Title from "../../ui/title";

const HealthList = (props) => {

    if (props.items.length === 0) {
        return (
            <Title className={styles.empty}>
                شعبه ای پیدا نشد!
            </Title>
        )
    }

    return (
        <Fragment>
            {props.items.map((healthItem) => (
                <div key={healthItem.id}>
                    <div className={styles['row-top']}>
                        <div className={styles['download-row']}>
                            <Link href={healthItem.link}>
                                <a>
                                    <DownloadBranch/>
                                    <span>
                            دانلود فایل مراکز درمانی بیمه آرمان در استان {healthItem.cityTitle}
                        </span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['row-head']}>
                            <span style={{width: '50px'}}></span>
                            <span>
                            نام مرکز
                        </span>
                            <span>
                            آدرس
                        </span>
                            <span>
                            تلفن
                        </span>
                            <span>
                            شهر
                        </span>
                            <span>
                            استان
                        </span>
                            <span>
                            مرکز
                        </span>
                        </div>
                        {healthItem.centerItem.map((item, index) => (
                            <div key={index} className={styles['row-content']}>
                        <span className={styles.number}>
                            {index+1}
                        </span>
                                <div>
<span>
                                {item.centerName}
                            </span>
                                    <span>
                                {item.address}
                            </span>
                                    <span>
                                <a href={`tel:${item.tel}`}>
                                    {item.tel}
                                </a>
                            </span>
                                    <span>
                                {item.city}
                            </span>
                                    <span>
                                {item.state}
                            </span>
                                    <span>
                                {item.center}
                            </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            ))}
        </Fragment>
    );
};

export default HealthList;