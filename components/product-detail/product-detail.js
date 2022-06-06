import {Fragment, useEffect, useState} from "react";
import styles from "../products/insurance/insurance.module.css";
import Card from "../ui/card";
import Title from "../ui/title";
import {BASE_URL} from "../../data/config";
import Lamp from "../icons/product/lamp";

const ProductDetail = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/insurance/active?pageIndex=0&pageSize=50", {
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

                setProducts(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    const [insuranceInfo, setInsuranceInfo] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/insuranceInfo/active?pageIndex=0&pageSize=10", {
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

                setInsuranceInfo(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    const detail = props.detail;

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <section className={styles.insurance}>
                <div className={styles.main}>
                    <div className={styles.tab}>
                        <nav>
                            <ul className={`productItem`}>
                                {insuranceInfo.filter((item, i) => (
                                    item.insuranceDetail.id === (products.map((value, i) => (value.id)))
                                ))
                                    .map((data,i) => (
                                    <li key={i} className={toggle === i ? 'active' : null} onClick={() => {
                                        toggleTab(i)
                                    }}>
                                        <span>
                                           <Lamp />
                                        </span>
                                        <a href={`#${i}`}>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/*<Image src={imgPath} alt="image" layout={"fill"} />*/}
                    </div>
                    <div className={`${styles.info}`}>
                        <Card>
                            <ul>
                                {insuranceInfo.map((data,i) => (
                                    <Fragment key={i}>
                                        {toggle === i ? (
                                            <li id={i}>
                                                {data.title !== '' ?
                                                    <Title className={styles.title}>
                                                        {data.title}
                                                    </Title> :
                                                    null
                                                }
                                                {data.description !== '' ?
                                                    <div>
                                                        {data.description}
                                                    </div> :
                                                    null
                                                }
                                            </li>
                                        ):null}
                                    </Fragment>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>
        </Fragment>
    )


};

export default ProductDetail;