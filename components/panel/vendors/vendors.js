import {Fragment} from "react";
import {NextSeo} from "next-seo";
import styles from './vendors.module.css';
import Image from "next/image";
import userImg from "../../../public/images/panel/menu-user.png";
import Content from "./content";

const Vendors = ({vendorsCat, vendors}) => {
    return (
        <Fragment>
            <NextSeo title="پنل نمایندگان">

            </NextSeo>
            <section className={styles.personel}>
                <div className={styles.header}>
                    <span>
                        <Image src={userImg} alt="user image" layout={"fill"}/>
                    </span>
                    <p>
                        پنل نمایندگان
                    </p>
                </div>
                <div className={styles.content}>
                    <Content vendorsCat={vendorsCat} vendors={vendors} />
                </div>
            </section>
        </Fragment>
    )
};

export default Vendors;