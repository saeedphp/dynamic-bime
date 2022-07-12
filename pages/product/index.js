import {Fragment} from "react";
import AllInsurances from "../../components/home-page/all-insurances/all-insurances";
import {NextSeo} from "next-seo";
import imgPath from "../../public/images/page-header.webp";
import PageHeader from "../../components/ui/page-header";

const ProductPage = ({insurances}) => {
    return (
        <Fragment>
            <NextSeo title="محصولات">

            </NextSeo>
            <PageHeader title="محصولات" pageTitle="" pageLink="#" bg={imgPath}/>
            <AllInsurances insurances={insurances} />
        </Fragment>
    )
};

export async function getServerSideProps() {
    const res = await fetch('https://bimeharman.faradns.ir/api/v1.0/cms/insurance/active?pageIndex=0&pageSize=50', {
        headers: {
            'cultureLcid': 1065
        }
    })
    const insurances = (await res.json())['result']

    return {
        props: {
            insurances,
        },
    }
}

export default ProductPage;