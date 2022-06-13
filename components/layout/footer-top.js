import styles from "./footer-top.module.css";
import Image from "next/image";
import logo from "../../public/images/footer-logo.png";
import FooterLocation from "../icons/footer-location";
import FooterTel from "../icons/footer-tel";
import FooterMail from "../icons/footer-mail";
import Link from "next/link";
import enamad from "../../public/images/enamad.png";
import {getAllAccess} from "../../data/footer/quick-access";
import {getAllService} from "../../data/footer/services";
import {getAllRules} from "../../data/footer/rules";
import {Fragment, useEffect, useState} from "react";
import {BASE_URL} from "../../data/config";

const FooterTop = ({data}) => {

    const accessItems = getAllAccess();
    const serviceItems = getAllService();
    const ruleItems = getAllRules();

    const [firstFooter, setFirstFooter] = useState([]);
    const [secondFooter, setSecondFooter] = useState([]);
    const [thirdFooter, setThirdFooter] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/menuitem/list/FirstFooterList", {
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

                setFirstFooter(data.result);
                console.log(setFirstFooter);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/menuitem/list/SecendFooterList", {
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

                setSecondFooter(data.result);
                console.log(setFirstFooter);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/menuitem/list/ThirdFooterList", {
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

                setThirdFooter(data.result);
                console.log(setFirstFooter);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <Fragment>
            <div className={styles['footer-top']}>
                <div className={`col-2 ${styles.item}`}>
                    <div className={styles.logo}>
                        <Image src={logo} alt="logo footer" layout={"fill"}/>
                    </div>
                    <div className={styles['col-address']}>
                        <p>
                            <FooterLocation/>
                            بلوار میرداماد، شمس تبریز جنوبی، پلاک 4
                        </p>
                        <a href="tel:0212856">
                            <FooterTel/>
                            021-2856
                        </a>
                        <a href="mailto:info@armanins.com">
                            <FooterMail/>
                            info@armanins.com
                        </a>
                    </div>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    {/*<h2 className={styles.title}>
                        دسترسی سریع
                    </h2>*/}
                    <ul>
                        {firstFooter.map((accessItem, i) => (
                            <li key={i}>
                                <Link href={`${accessItem.url}`}>
                                    <a>
                                        {accessItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`col-2 ${styles.item}`}>
                   {/* <h2 className={styles.title}>
                        خدمات بیمه ای
                    </h2>*/}
                    <ul>
                        {secondFooter.map((serviceItem) => (
                            <li key={serviceItem.id}>
                                <Link href={`${serviceItem.url}`}>
                                    <a>
                                        {serviceItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    {/*<h2 className={styles.title}>
                        قوانین و مقررات
                    </h2>*/}
                    <ul>
                        {thirdFooter.map((ruleItem) => (
                            <li key={ruleItem.id}>
                                <Link href={`${ruleItem.url}`}>
                                    <a>
                                        {ruleItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    <div className={styles.enamad}>
                        <Image src={enamad} alt="enamad" layout={"fill"}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};



export default FooterTop;