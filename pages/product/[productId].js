import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Title from "../../components/ui/title";
import bgHeader from "../../public/images/page-header.webp";
import PageHeader from "../../components/ui/page-header";
import {NextSeo} from "next-seo";
import {BASE_URL} from "../../data/config";
import ProductDetail from "../../components/product-detail/product-detail";
import Lamp from "../../components/icons/product/lamp";
import styles from "../../components/products/insurance/insurance.module.css";
import Card from "../../components/ui/card";

const ProductDetailPage = () => {

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

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    const router = useRouter();
    const {productId} = router.query;
    let currProduct;
    let j = 0;
    for (let product of products) {
        if (product.id == productId) currProduct = product;
    }

    if (currProduct != undefined)
        return (
            <Fragment>
                <NextSeo title={currProduct.title}>

                </NextSeo>
                <PageHeader title={currProduct.title} pageTitle="محصولات" pageLink="/product" bg={bgHeader}/>
                <section className={styles.insurance}>
                    <div className={styles.main}>
                        <div className={styles.tab}>
                            <nav>
                                <ul className={`productItem`}>
                                    {insuranceInfo.map((data, i) => {
                                        if (data.insuranceDetail.id === currProduct.id) {
                                            return (
                                                <li key={i} className={toggle === i ? 'active' : null} onClick={() => {
                                                    toggleTab(i)
                                                }}>
                                                    <span>
                                                       <Lamp/>
                                                    </span>
                                                    <a href={`#${data.title}`}>
                                                        {data.title}-{i}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </nav>
                            {/*<Image src={imgPath} alt="image" layout={"fill"} />*/}
                        </div>
                        <div className={`${styles.info}`}>
                            <Card>
                                <ul>
                                    {insuranceInfo.map((data, i) => {
                                        if (data.insuranceDetail.id === currProduct.id) {
                                            return (
                                                <Fragment key={i}>
                                                    {toggle === i ? (
                                                        <li id={data.title}>
                                                            {data.title !== '' ?
                                                                <Title className={styles.title}>
                                                                    {data.title}
                                                                </Title> :
                                                                null
                                                            }
                                                            {data.description !== '' ?
                                                                <div dangerouslySetInnerHTML={{__html: data.description}}>
                                                                </div> :
                                                                null
                                                            }
                                                        </li>
                                                    ) : null}
                                                </Fragment>
                                            )
                                        }
                                    })}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

            </Fragment>
        );
    else
        return (
            <Title>
                هیچ مقاله ای یافت نشد!
            </Title>
        )
};

export default ProductDetailPage;
