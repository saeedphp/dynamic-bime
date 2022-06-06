import {Fragment} from "react";
import {NextSeo} from "next-seo";
import Image from "next/image";
import Link from "next/link";
import errorImg from '../../public/images/404.jpg';
import Button from "../../components/ui/button";

const ErrorPage = () => {
    return (
        <Fragment>
            <NextSeo title="صفحه مورد نظر یافت نشد!">

            </NextSeo>
            <section className="error_page">
                <span>
                    <Image src={errorImg} alt="not found" layout={"fill"} />
                </span>
                <h2>
                    صفحه مورد نظر یافت نشد!
                </h2>
                <Button link="/">
                    بازگشت به صفحه اصلی
                </Button>
            </section>
        </Fragment>
    )
};

export default ErrorPage;