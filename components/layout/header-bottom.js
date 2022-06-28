import styles from "./header-bottom.module.css";
import Link from "next/link";
import HeaderEarth from "../icons/header-earth";
import HeaderArrow from "../icons/header-arrow";
import {getAllMenu} from "../../data/menu";
import MobileMenu from "./mobile-menu";
import {useEffect, useState} from "react";
import {BASE_URL} from "../../data/config";

const HeaderBottom = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/menuitem/list/active", {
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

                setMenu(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    const menuItems = getAllMenu();

    return (
        <div className={styles['header-bottom']}>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        {menu.filter((item) => (item.parentId === null && item.firstFooter === false && item.secendFooter === false && item.thirdFooter === false))
                            .map((menuItem) => (
                            <li key={menuItem.id}>
                                <Link href={`${menuItem.url}`}>
                                    <a className={menuItem.children.length !== 0 && 'has-children'}>
                                        {menuItem.title}
                                    </a>
                                </Link>
                                {menuItem.children && <ul className={styles.subMenu}>
                                    {menuItem.children.map((item,index) => (
                                        <li key={index}>
                                            <Link href={`${item.url}`}>
                                                <a>
                                                    {item.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={styles['mobile-menu']}>
                <MobileMenu />
            </div>
            <div className={styles.service}>
                <div className={styles.card}>
                    <HeaderEarth />
                    <span>
                                خدمات الکترونیکی
                            </span>
                    <HeaderArrow />
                </div>
                <ul className={styles['e-menu']}>
                    <li>
                        <a href="https://e.armanins.com/BimeSiteMvc/Car/SalesNerkhEstelam/Index">
                            استعلام نرخ ثالث
                        </a>
                    </li>
                    <li>
                        <a href="https://e.armanins.com/BimeSiteMvc/Car/SalesNerkhEstelam/Index">
                            استعلام نرخ بدنه
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderBottom;