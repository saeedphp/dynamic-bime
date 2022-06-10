import styles from "./header-top.module.css";
import Link from "next/link";
import Image from "next/image";
import imgPath from "../../public/images/logo.png";
import HeaderSearch from "../icons/header-search";
import Phone from "../icons/phone";
import HeaderLogin from "../icons/header-login";
import HeaderArrow from "../icons/header-arrow";
import {useState} from "react";
import Cookies from "universal-cookie";
import {useRouter} from "next/router";

const HeaderTop = () => {

    const cookies = new Cookies();
    const token = cookies.get('token');

    const [isShown, setIsShown] = useState(false);
    const [panel, setPanel] = useState(false);

    const toggle = () => {
        setIsShown(!isShown);
    };

    const togglePanel = () => {
        setPanel(!panel);
    };

    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();


        cookies.remove('token', {path: "/", redirect: '/login'});
        console.log(cookies.get('token'));
        router.push({
            pathname: '/login',
        });
        //window.location.reload();
    };

        return (
        <div className={styles['header-row__top']}>
            <div className={`row ${styles.item} ${styles.logo}`}>
                <Link href="/">
                    <a>
                        <Image src={imgPath} alt="logo" layout={"fill"}/>
                    </a>
                </Link>
            </div>
            <div className={`row ${styles.item} ${styles.slogan}`}>
                <h2 className={styles.title}>
                    آرمان ما، آرمان شما
                </h2>
            </div>
            <div className={`row ${styles.item} ${styles.btnLogin}`}>
                <div className={styles.search}>
                    <a className={styles.tel} href="tel:0212856">
                        <Phone/>
                    </a>
                </div>
                <div className={styles.search}>
                    <HeaderSearch onClick={toggle}/>
                    <div className={`h-search ${styles.search__form} ${isShown ? 'active' : ''}`}>
                        <div className={styles.wrapper}>
                            <form role="search" method="get" className="search-form" action="">
                                    <input type="text" placeholder="جستجو…" name="search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.signIn}>
                    {token ? (
                        <div onClick={togglePanel}>
                            <a>
                           <span>
                                    پنل کاربری
                                </span>
                                <ul className={`panelList ${styles.panelul} ${panel ? 'active' : ''}`}>
                                    <li>
                                        <Link href="/panel/personel">
                                            <a>
                                                پنل پرسنل
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a onClick={submitHandler}>
                                            خروج
                                        </a>
                                    </li>
                                </ul>
                            </a>
                        </div>
                    ) : (
                        <Link href="/login">
                            <a>
                           <span>
                                    ورود
                                </span>
                            </a>
                        </Link>
                    )}

                    <HeaderArrow/>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;