import React, {Fragment, useState} from "react";
import PageHeader from "../ui/page-header";
import styles from './blog.module.css';
import BlogItems from "./blog-items";
import Sidebar from "./sidebar";
import {NextSeo} from "next-seo";
import bgHeader from "../../public/images/page-header.webp";

const Blog = () => {

    return (
        <Fragment>
            <NextSeo title="اخبار">

            </NextSeo>
            <PageHeader title="اخبار" pageTitle="روابط عمومی" pageLink="/blog" bg={bgHeader} />
            <section className={styles.blog}>
                <Sidebar/>
                <BlogItems/>
            </section>
        </Fragment>
    );
};

export default Blog;