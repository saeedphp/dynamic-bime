import styles from './contactus.module.css';
import PageHeader from "../ui/page-header";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";
import {NextSeo} from "next-seo";
import bgHeader from "../../public/images/page-header.webp";
import React from "react";

const Contactus = () => {
    return (
        <>
            <NextSeo title="تماس با ما">

            </NextSeo>
            <PageHeader title="تماس با ما" pageTitle="" pageLink="/contactus" bg={bgHeader} />
            <section className={styles.contactus}>
                <div className={styles.mapWrapper}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d51820.03260317683!2d51.42422204484634!3d35.732316351116836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YHYsdin2YXZiNis!5e0!3m2!1sfa!2s!4v1646236322231!5m2!1sfa!2s"
                        allowFullScreen="" loading="lazy"></iframe>
                </div>
                <ContactInfo />
                <ContactForm />
            </section>
        </>
    );
};

export default Contactus;