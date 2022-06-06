import styles from './brochure.module.css';
import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import bgHeader from '../../../public/images/page-header.webp';
import Card from "../../ui/card";
import imgPath from '../../../public/images/brochure/download-1.webp';
import {allBrochure} from "../../../data/brochure";
import BrochureItem from "./brochure-item";
import {NextSeo} from "next-seo";

const Brochure = ({brochures}) => {

    const allBrochures = allBrochure();

    return (
        <Fragment>
            <NextSeo title="بروشور">

            </NextSeo>
            <PageHeader title="بروشور" pageTitle="قوانین و مقررات" pageLink="/rules" bg={bgHeader}/>
            <section className={styles.brochure}>
                <Card className={styles.wrapper}>
                    {brochures.map((element) => (
                        <BrochureItem
                            key={element.id}
                            title={element.title}
                            link={"https://bimeharman.faradns.ir/" + element.customFileGetResponseDto.url}
                            backgroundImg='images/brochure/download-4.webp'
                        />
                    ))}
                </Card>
            </section>
        </Fragment>
    )
};

export default Brochure;