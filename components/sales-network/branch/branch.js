import {Fragment, useEffect, useState} from "react";
import PageHeader from "../../ui/page-header";
import styles from './branch.module.css';
import Cities from "./cities";
import {allBranches} from "../../../data/branch";
import Link from "next/link";
import {NextSeo} from "next-seo";
import imgPath from "../../../public/images/page-header.webp";
import IranMap from "../iran-map/IranMap";
import iranProvinces from "../../../data/iranProvinces";
import {BASE_URL} from "../../../data/config";
import IranMapData from "../../../data/IranMapData";

const Branch = () => {

    const [branch, setBranch] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/representation/active?pageIndex=0&pageSize=20", {
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

    /*    const [showData, setShowData] = useState(true);
        const ShowAll = () => setShowData(true);
        const ShowFun = () => setShowData(false);

        const [showCity, setShowCity] = useState(true);
        const ShowShahr = () => setShowCity(true);
        const HideShahr = () => setShowCity(false);

        const [provinces] = useState(() => iranProvinces);

        const [citys, setCitys] = useState();

        const Sitecity = (e) => {
            setCitys(e.target.value);
            const [filteredSite] = provinces.filter((item) => item.name === e.target.value);
            setCurrentSite(filteredSite.sites);
        }

        const [currentSite, setCurrentSite] = useState([
            {
                id: 'sit20',
                name: 'Vardavrd ( 812 M )',
                flys: 40,
            },
            {
                id: 'sit21',
                name: 'Shahran ( peak ) ( 755 M )',
                flys: 50,
            },
            {
                id: 'sit22',
                name: 'Emamzadeh Hashem ( Damavand ) ( 442 M )',
                flys: 70,
            },
            {
                id: 'sit23',
                name: 'Shirvan ( 812 M )',
                flys: 35,
            },
        ]);*/
    const [filteredCity, setFilteredCity] = useState('تهران');

    const [showCity, setShowCity] = useState(true);
    const ShowShahr = () => setShowCity(true);
    const HideShahr = () => setShowCity(false);

    const Sitecity = (e) => {
        setFilteredCity(e.target.value);
    }
    return (
        <Fragment>
            <NextSeo title="شعب بیمه آرمان">

            </NextSeo>
            <PageHeader title="شعب بیمه آرمان" pageTitle="شبکه فروش" pageLink="" bg={imgPath}/>
            <section className={styles.branch}>
                <h2 className={styles.title}>
                    بیمه آرمان در سرتاسر ایران عزیزمان در کنار شماست…
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
                    <div className={styles.map}>
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
                </div>
            </section>
        </Fragment>
    );
};

export default Branch;