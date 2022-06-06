import React, {Fragment} from "react";
import PageHeader from "../ui/page-header";
import styles from './reporting.module.css';
import ReportItem from "./report-item";
import ReportRisk from "./report-risk";
import FinancialReport from "./financial-report";
import BranchReport from "./branch-report";
import {NextSeo} from "next-seo";
import bgHeader from "../../public/images/page-header.webp";
import {BASE_URL} from "../../data/config";

const Reporting = ({reports}) => {

    return (
      <Fragment>
          <NextSeo title="گزارشگری و افشای اطلاعات">

          </NextSeo>
          <PageHeader title="گزارشگری و افشای اطلاعات" pageTitle="" pageLink="/reporting" bg={bgHeader} />
          <section className={styles.reporting}>
              <ReportItem />
              {/*<ReportRisk />
              <FinancialReport />
              <BranchReport />*/}
          </section>
      </Fragment>
    );
};

export default Reporting;