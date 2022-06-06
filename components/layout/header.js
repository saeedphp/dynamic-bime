import {Fragment} from "react";
import styles from './header.module.css';
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";


const Header = () => {

    return (
        <Fragment>
            <section className={styles.header}>
                <HeaderTop />
                <HeaderBottom />
            </section>
        </Fragment>
    )
};

export default Header;