import PageHeader from "../../ui/page-header";
import styles from './terms.module.css';
import Card from "../../ui/card";
import Title from "../../ui/title";
import Image from "next/image";
import imgPath from '../../../public/images/terms.webp';
import DownloadCard from "../../ui/download-card";
import {getAllTerms} from "../../../data/terms";
import {NextSeo} from "next-seo";
import bgHeader from "../../../public/images/page-header.webp";

const Terms = ({terms}) => {

    const allTerms = getAllTerms();

    return (
        <>
            <NextSeo title="شرایط عضویت در هیئت مدیره">

            </NextSeo>
            <PageHeader title="شرایط عضویت در هیئت مدیره" pageTitle="قوانین و مقررات" pageLink="" bg={bgHeader} />
            <section className={styles.terms}>
                <Card>
                    <Title>
                        آیین نامه 90 شورایعالی بیمه
                    </Title>
                    <div className={styles.info}>
                        <div className={styles.imgWrapper}>
                            <Image src={imgPath} alt="terms image" layout={"fill"} />
                        </div>
                        <div className={styles.download}>
                            {terms.map((allTerm) => (
                                <div key={allTerm.id}>
                                    <a href={"https://bimeharman.faradns.ir/" + allTerm.customFileGetResponseDto.url}>
                                        <DownloadCard>
                                            {allTerm.title}
                                        </DownloadCard>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </section>
        </>
    )
};

export default Terms;