import {Fragment} from "react";
import styles from './personel.module.css';
import Image from "next/image";
import userImg from "../../../public/images/panel/menu-user.png";
import Content from "./content";
import {NextSeo} from "next-seo";

const Personel = ({personelCat,personel}) => {
    return (
        <Fragment>
            <NextSeo title="پنل پرسنل">

            </NextSeo>
            <section className={styles.personel}>
                <div className={styles.header}>
                    <span>
                        <Image src={userImg} alt="user image" layout={"fill"}/>
                    </span>
                    <p>
                        پنل پرسنل
                    </p>
                </div>
                <div className={styles.content}>
                    <Content personelCat={personelCat} personel={personel} />
                </div>
            </section>
        </Fragment>
    )
};

export default Personel;