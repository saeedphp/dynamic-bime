import Login from "../../components/login/login";
import {NextSeo} from "next-seo";
import {Fragment} from "react";

const LoginPage = () => {
    return (
        <Fragment>
            <NextSeo title="ورود">

            </NextSeo>
            <Login />
        </Fragment>
    )
};

export default LoginPage;