import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './vision.module.css';
import imgPath from '../../../public/images/vision-bg.webp';
import bgHeader from '../../../public/images/page-header.webp';
import Image from "next/image";
import {getAllVision} from "../../../data/vision";
import VisionItem from "./vision-item";
import {NextSeo} from "next-seo";
import {BASE_URL} from "../../../data/config";

const Vision = ({visionsAttr, visions}) => {

    const items = getAllVision();

    return (
        <Fragment>
            <NextSeo title="چشم انداز های بیمه آرمان">

            </NextSeo>
            <PageHeader title="چشم انداز های بیمه آرمان" pageTitle="درباره ما" pageLink="/about" bg={bgHeader} />
            <section className={styles.vision}>
                {visions.map((item ,i) => (
                    <Fragment key={i}>
                        <div>
                            <Image src={BASE_URL + item.customFileGetResponseDto.url} alt="vision image" layout={"fill"} />
                        </div>
                        <div className={styles.info}>
                            <p>
                                {item.title}
                            </p>
                            <p dangerouslySetInnerHTML={{__html: item.description}}>

                            </p>
                        </div>
                    </Fragment>
                ))}

                <ul>
                    {visionsAttr.map((item) => (
                        <VisionItem
                            key={item.id}
                            title={item.title}
                        />
                    ))}
                </ul>

            </section>
        </Fragment>
    )
};

export default Vision;