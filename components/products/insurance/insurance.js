import {Fragment, useState} from "react";
import PageHeader from "../../ui/page-header";
import styles from './insurance.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/product-img.webp';
import Card from "../../ui/card";
import Title from "../../ui/title";
import {getALlProduct} from "../../../data/product";
import {NextSeo} from "next-seo";
import bgHeader from "../../../public/images/page-header.webp";


const Insurance = () => {

    const productData = getALlProduct();

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <NextSeo title="بیمه اشخاص">

            </NextSeo>
            <PageHeader title="بیمه اشخاص" pageTitle="محصولات" pageLink="/products" bg={bgHeader} />
            <section className={styles.insurance}>
                <div className={styles.main}>
                    <div className={styles.tab}>
                        <nav>
                            <ul className={`productItem`}>
                                {productData.map((data,i) => (
                                    <li key={data.id} className={toggle === i ? 'active' : null} onClick={() => {
                                        toggleTab(i)
                                    }}>
                                        <span>
                                            {data.icon}
                                        </span>
                                        <a href={`#${i}`}>
                                            {data.tabTitle}
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
                                {productData.map((data,i) => (
                                    <Fragment key={i}>
                                        {toggle === i ? (
                                            <li id={i}>
                                                {data.contentTitle !== '' ?
                                                    <Title className={styles.title}>
                                                        {data.contentTitle}
                                                    </Title> :
                                                null
                                                }
                                                {data.contentDesc !== '' ?
                                                    <div>
                                                        {data.contentDesc}
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
    );
};

export default Insurance;