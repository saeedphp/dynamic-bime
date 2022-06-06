import {useMemo, useState} from "react";
import styles from "./reporting.module.css";
import Title from "../ui/title";
import DownArrow from "../icons/down-arrow";
import Card from "../ui/card";
import CarInsurance from "../icons/insurance/car-insurance";

const DUMMY_DATA = [
    {
        id: 'r1',
        title: 'مدیریت ریسک',
        children: [
            {
                id: 'r1-1',
                txt: 'لیست اکچوئران رسمی بیمه (سامانه سنهاب)',
            },
            {
                id: 'r1-2',
                txt: 'وضعیت ریسک های شرکت و نحوه مدیریت آنها',
            },
            {
                id: 'r1-3',
                txt: 'ساختار سازمانی واحد مدیریت ریسک',
            },
            {
                id: 'r1-4',
                txt: 'شرح وظایف و سطح سازمانی اکچوئری',
            },
            {
                id: 'r1-5',
                txt: 'لیست اکچوئران رسمی بیمه (سامانه سنهاب)',
            },
            {
                id: 'r1-6',
                txt: 'وضعیت ریسک های شرکت و نحوه مدیریت آنها',
            },
            {
                id: 'r1-7',
                txt: 'ساختار سازمانی واحد مدیریت ریسک',
            },
            {
                id: 'r1-8',
                txt: 'شرح وظایف و سطح سازمانی اکچوئری',
            },
        ],
    },
];

const ReportRisk = () => {

    const [items] = useState(DUMMY_DATA);
    const [numberOfItemsShown, setNumberOfItemsToShown] = useState(4);

    const showMore = () => {
        if (numberOfItemsShown + 3 <= items.length) {
            setNumberOfItemsToShown(numberOfItemsShown + 10);
        } else {
            setNumberOfItemsToShown(numberOfItemsShown + 10);
        }
    };

    const itemsToShow = useMemo(() => {
        return items
            .map((report) => (
                <li key={report.id}>
                    <div className={styles.info}>
                        <Title className={styles.title}>
                            <i></i>
                            {report.title}
                            <DownArrow />
                        </Title>
                        <ul>
                            {report.children.slice(0, numberOfItemsShown).map((values) => (
                                <li key={values.id} className={styles.items}>
                                    <div className={styles.tab}>
                                  <span>
                                      <i></i>
                                  </span>
                                        <Card className={styles.txt}>
                                            {values.txt}
                                        </Card>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className={styles['load-more']} onClick={() => {showMore(report.id)}}>
                        مشاهده همه موارد
                    </button>
                </li>
            ));
    }, [items, numberOfItemsShown]);

    return (
        <>
            <div className={styles.card}>
                <ul className={styles.data}>
                    {itemsToShow.length ? itemsToShow : "Loading..."}
                </ul>
                <div className={styles.img}>
                  <span className={styles.icon}>
                      <CarInsurance />
                  </span>
                </div>
            </div>
        </>
    );
};

export default ReportRisk;