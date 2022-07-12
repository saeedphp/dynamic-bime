import {Fragment} from "react";
import Banner from "../components/home-page/banner/banner";
import Intro from "../components/home-page/intro/intro";
import Insurance from "../components/home-page/insurance/insurance";
import AllInsurance from "../components/home-page/all-insurance/all-insurance";
import Blog from "../components/home-page/blog/blog";
import Head from "next/head";
import FloatingMenu from "../components/home-page/floating-menu/floating-menu";
import AllInsurances from "../components/home-page/all-insurances/all-insurances";

const HomePage = ({banners, insurances}) => {
    return (
        <Fragment>
            <Head>
                <title>بیمه آرمان-آرمان ما، آرمان شما</title>
                <meta name="description" content="Arman INs Site" />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <Banner banners={banners}/>
            <Intro/>
            <Insurance/>
            <AllInsurances insurances={insurances} />
            <Blog/>
            {/*<FloatingMenu />*/}
        </Fragment>
    );
};

export async function getServerSideProps() {
    const res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/insurance/active?pageIndex=0&pageSize=50', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const insurances = (await res.json())['result']

    const banners_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/sliderItem/active?pageIndex=0&pageSize=50', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const banners = (await banners_res.json())['result'];

    const blog_categories_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/blogcategory/list/active', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const blog_categories = (await blog_categories_res.json())['result']

    const blog_posts_res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/blogpost/active', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const blog_posts = (await blog_posts_res.json())['result']

    return {
        props: {
            banners,
            insurances,
        },
    }
}

export default HomePage;