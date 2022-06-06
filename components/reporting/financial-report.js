import {useMemo, useState} from "react";
import styles from "./reporting.module.css";
import Title from "../ui/title";
import DownArrow from "../icons/down-arrow";
import Card from "../ui/card";
import CarInsurance from "../icons/insurance/car-insurance";

const DUMMY_DATA = [
    {
        id: 'r1',
        title: 'وضعیت و عملکرد مالی',
        children: [
            {
                id: 'r1-1',
                txt: 'تراز مشارکت در منافع بیمه گذاران بیمه های زندگی',
            },
            {
                id: 'r1-2',
                txt: 'نسبت های عملیاتی و مالی با اهمیت',
            },
            {
                id: 'r1-3',
                txt: 'نسبت توانگری مالی',
            },
            {
                id: 'r1-4',
                txt: 'سیاست افزایش سرمایه و تغییر در میزان سرمایه',
            },
            {
                id: 'r1-5',
                txt: 'طرح های جدید بیمه ای دارای مجوز از بیمه مرکزی',
            },
            {
                id: 'r1-6',
                txt: 'لیست ارزیابان خسارت بیمه (سامانه سنهاب)',
            },
            {
                id: 'r1-7',
                txt: 'اوراق مشارکت ، صکوک و سایر اوراق بهادار',
            },
            {
                id: 'r1-8',
                txt: 'اطلاعات تفکیکی نیروی انسانی',
            },
            {
                id: 'r1-9',
                txt: 'عملکرد بیمه گری مستقیم واتکائی به تفکیک رشته های بیمه ای',
            }
        ],
    },
];

const FinancialReport = () => {

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

export default FinancialReport;