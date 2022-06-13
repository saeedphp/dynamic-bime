import {Fragment, useState, useEffect} from "react";
import styles from './branch.module.css';
import {allHealthCenters} from "../../../data/health-center";
import HealthList from "./health-list";
import HealthFilter from "./health-filter";
import {NextSeo} from "next-seo";
import PageHeader from "../../ui/page-header";
import imgPath from "../../../public/images/page-header.webp";
import Link from "next/link";
import {BASE_URL} from "../../../data/config";
import Pdf from "./pdf";
import IranMapData from "../../../data/IranMapData";

const Branch = (props) => {

    const [healthsCenter, setHealthsCenter] = useState([]);
    const [pdf, setPdf] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/healthCenter/active?pageIndex=0&pageSize=10", {
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

                setHealthsCenter(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);
    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/healthCenterPdf/active?pageIndex=0&pageSize=20", {
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

                setPdf(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    const healths = allHealthCenters();

    const [filteredCity, setFilteredCity] = useState('تهران');

    const filterChangeHandler = (selectedCity) => {
        setFilteredCity(selectedCity);
    };

    const filteredCities = healthsCenter.filter((city) => {
        return city.addressGetResponseDto.stateInfo.name === filteredCity;
    });

    const filteredPdfs = pdf.filter((city) => {
        return city.stateGetResponseDto.name === filteredCity;
    });


    const [showCity, setShowCity] = useState(true);
    const ShowShahr = () => setShowCity(true);
    const HideShahr = () => setShowCity(false);

    const [citys, setCitys] = useState();
    const Sitecity = (e) => {
        setFilteredCity(e.target.value);
        const [filteredSite] = IranMapData.filter((item) => item.name === e.target.value);
    }


    return (
        <Fragment>
            <NextSeo title="مراکز درمانی">

            </NextSeo>
            <PageHeader title="مراکز درمانی" pageTitle="امور مشتریان" pageLink="" bg={imgPath}/>
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
            <section className={styles.branch}>
                <HealthFilter
                    selected={filteredCity}
                    onChangeFilter={filterChangeHandler}
                    citys={filteredCity}
                    Sitecity={Sitecity}
                    ShowShahr={ShowShahr}
                    showCity={showCity}
                />
                <Pdf items={filteredPdfs} />
                <HealthList items={filteredCities} />
            </section>
        </Fragment>
    )
};

export default Branch;