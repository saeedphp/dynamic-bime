import styles from "./health-list.module.css";
import React from "react";
import Link from "next/link";
import DownloadBranch from "../../icons/download-branch";
import {BASE_URL} from "../../../data/config";

const Pdf = (props) => {
    return (
        <div>

            <div className={styles['row-top']}>
                <div className={styles['download-row']}>
                    {props.items.map((item, i) => {
                            return (
                                <Link key={i} href={BASE_URL + item.customFileGetResponseDto.url}>
                                    <a>
                                        <DownloadBranch/>
                                        <span>
                            دانلود فایل مراکز درمانی بیمه آرمان در استان {item.stateGetResponseDto.name}
                        </span>
                                    </a>
                                </Link>
                            )
                        })}
                </div>
            </div>


        </div>
    )
};

export default Pdf;