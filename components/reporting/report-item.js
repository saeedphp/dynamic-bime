import {Fragment, useEffect, useMemo, useState} from "react";
import styles from "./reporting.module.css";
import Title from "../ui/title";
import DownArrow from "../icons/down-arrow";
import Card from "../ui/card";
import {getAllReport} from "../../data/report";
import {BASE_URL} from "../../data/config";
import Loader from "../ui/loader";

const ReportItem = () => {

    const [reports, setReports] = useState([]);
    const [reportDetail, setReportDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/revelation/active?pageIndex=0&pageSize=100", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setReports(data.result);
                // this.setState({ totalReactPackages: data.total })
            })


            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        setIsLoading(true)
        fetch(BASE_URL + "api/v1.0/cms/revelationAttribute/active?pageIndex=0&pageSize=100", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setReportDetail(data.result);
                // this.setState({ totalReactPackages: data.total })
            })


            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    //const reports = getAllReport();

    const [opened, setOpened] = useState(0);

    const toggle = (id) => {
        if (opened === id) {
            return setOpened(null)
        }
        setOpened(id);
    };

    return (
        <Fragment>
            <div className={styles.card}>
                <ul className={styles.data}>
                    {isLoading ? reports.map((report, i) => {
                            return (
                                <li key={i}>
                                    <div className={styles.info}>
                                        <Title onClick={() => {
                                            toggle(i)
                                        }} className={styles.title}>
                                            <i></i>
                                            {report.title}
                                            <DownArrow/>
                                        </Title>
                                        <ul className={`report_desc ${opened === (i) ? 'active' : null}`}>
                                            {reportDetail.filter((item, i) => (
                                                item.revelationGetResponseDto.id === report.id
                                            ))
                                                .map((item, i) => {
                                                return (
                                                    <li key={i} className={styles.items}>
                                                        <div className={styles.tab}>
                                                            <a href="#">
                                                            <span>
                                      <i></i>
                                  </span>
                                                            </a>
                                                            <Card className={styles.txt}>
                                                                <a href="#">
                                                                    {item.title}
                                                                </a>
                                                            </Card>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        }) : <Loader />}
                </ul>
            </div>

        </Fragment>
    )

};

export default ReportItem;