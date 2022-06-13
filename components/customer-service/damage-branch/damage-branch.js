import {Fragment, useEffect, useState} from "react";
import {NextSeo} from "next-seo";
import PageHeader from "../../ui/page-header";
import imgPath from "../../../public/images/page-header.webp";
import styles from "../../customer-service/damage-branch/damage-branch.module.css";

import Link from "next/link";
import {allBranches} from "../../../data/branch";
import Cities from "./cities";
import {BASE_URL} from "../../../data/config";
import IranMapData from "../../../data/IranMapData";

const DamageBranch = (props) => {

    const [branch, setBranch] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/damageCenter/active?pageIndex=0&pageSize=100", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setBranch(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    const branches = allBranches();

    const [filteredCity, setFilteredCity] = useState('تهران');
    const [showCity, setShowCity] = useState(true);
    const ShowShahr = () => setShowCity(true);
    const HideShahr = () => setShowCity(false);
    const Sitecity = (e) => {
        setFilteredCity(e.target.value);
        const [filteredSite] = IranMapData.filter((item) => item.name === e.target.value);
    }

    return (
        <Fragment>
            <NextSeo title="شعب دریافت خسارت">

            </NextSeo>
            <PageHeader title="شعب دریافت خسارت" pageTitle="امور مشتریان" pageLink="" bg={imgPath}/>
            <section className={styles['branch-damage']}>
                <h2 className={styles.title}>
                    بیمه گذاران محترم می توانند برای دریافت خسارت به شعب بیمه آرمان در سراسر کشور عزیزمان مراجعه نمایند…
                </h2>
                <div className={styles.map}>
                    <div className={styles.cities}>
                        <Cities
                            items={branch}
                            filteredCity={filteredCity}
                            Sitecity={Sitecity}
                            ShowShahr={ShowShahr}
                            showCity={showCity}
                        />
                    </div>
                    <div>
                        <svg id="map" x="0px" y="0px" viewBox="0 0 500 500">
                            {IranMapData.map((item) => (
                                <path
                                    key={item.id}
                                    className={item.className}
                                    d= {item.dcode}
                                    strokeWidth="5.2631578947368425"
                                    strokeOpacity="1"
                                    transform="matrix(0.38,0,0,0.38,0,0)"
                                    onClick={() => {
                                        setFilteredCity(item.name);
                                        HideShahr()
                                    }}
                                ></path>
                            ))}
                        </svg>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default DamageBranch;