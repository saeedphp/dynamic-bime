import {Fragment} from "react";
import {NextSeo} from "next-seo";
import PageHeader from "../../components/ui/page-header";
import bgHeader from "../../public/images/page-header.webp";

const Renewagentlicense = () => {
    return (
        <Fragment>
            <NextSeo title="تمدید پروانه نمایندگی">

            </NextSeo>
            <PageHeader title="تمدید پروانه نمایندگی" pageTitle="پنل نمایندگی" pageLink="" bg={bgHeader} />
            <section>
                <iframe id="iframe1" name="iframe1" width="100%" height="1000px" frameBorder="0"
                        src="https://samfa.armanins.com/samfaproject/bpmexpertengine/AP_AgancyContinuation.aspx" allowTransparency="true"></iframe>
            </section>
        </Fragment>
    )
};

export default Renewagentlicense;