import styles from "./header-bottom.module.css";
import Link from "next/link";
import HeaderEarth from "../icons/header-earth";
import HeaderArrow from "../icons/header-arrow";
import {getAllMenu} from "../../data/menu";
import MobileMenu from "./mobile-menu";

const HeaderBottom = () => {

    const menuItems = getAllMenu();

    return (
        <div className={styles['header-bottom']}>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.id}>
                                <Link href={`/${menuItem.link}`}>
                                    <a className={menuItem.children && 'has-children'}>
                                        {menuItem.title}
                                    </a>
                                </Link>
                                {menuItem.children && <ul className={styles.subMenu}>
                                    {menuItem.children.map((item,index) => (
                                        <li key={index}>
                                            <Link href={`/${item.link}`}>
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