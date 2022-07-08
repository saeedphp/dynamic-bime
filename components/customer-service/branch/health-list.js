import React, {Fragment, useEffect, useState} from "react";
import styles from "./health-list.module.css";
import Link from "next/link";
import DownloadBranch from "../../icons/download-branch";
import Title from "../../ui/title";
import {BASE_URL} from "../../../data/config";

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

            <div>

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
                    {props.items.map((item, i) => {
                        return (
                            <div key={i} className={styles['row-content']}>
                        <span className={styles.number}>
                            {i + 1}
                        </span>
                                <div>
<span>
                                {item.centerName}
                            </span>
                                    <span>
                                {item.addressGetResponseDto.exactAddress}
                            </span>
                                    <span>
                                <a href={`tel:${item.phoneNumber}`}>
                                    {item.phoneNumber}
                                </a>
                            </span>
                                    <span>
                                {item.addressGetResponseDto.cityInfo.name}
                            </span>
                                    <span>
                                {item.addressGetResponseDto.stateInfo.name}
                            </span>
                                    <span>
                                {item.center}
                            </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </Fragment>
    );
};

export default HealthList;