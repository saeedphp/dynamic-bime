import {Fragment, useState} from "react";
import PageHeader from "../../ui/page-header";
import styles from './intro.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/about/intro/intro.webp';
import hrImage from '../../../public/images/about/intro/hr.webp';
import cntImg from '../../../public/images/about/intro/content.webp';
import singleImg from '../../../public/images/about/intro/Layer 2 (2).webp';
import innovation from '../../../public/images/about/intro/innovation.webp';
import {aboutData} from "../../../data/about/intro";
import AboutBranch from "../../icons/about-branch";
import CounterUp from "../../ui/counter-up";
import Card from "../../ui/card";
import DownloadCard from "../../ui/download-card";
import Accordion from "../../ui/accordion";
import Slider from 'react-slick';
import pic1 from '../../../public/images/tandis/tandis-1.webp';
import pic2 from '../../../public/images/tandis/tandis-2.webp';
import pic3 from '../../../public/images/tandis/tandis-3.webp';
import pic4 from '../../../public/images/tandis/tandis-4.webp';
import pic5 from '../../../public/images/tandis/tandis-5.webp';
import pic6 from '../../../public/images/tandis/tandis-3.webp';
import pic7 from '../../../public/images/tandis/tandis-4.webp';
import pic8 from '../../../public/images/tandis/tandis-5.webp';
import {NextSeo} from "next-seo";
import bgHeader from "../../../public/images/page-header.webp";
import Title from "../../ui/title";

const Intro = () => {

    const about = aboutData();

    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

    const settings = {
        dots: true,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <Fragment>
            <NextSeo title="بیمه آرمان در یک نگاه">

            </NextSeo>
            <PageHeader title="بیمه آرمان در یک نگاه" pageTitle="درباره ما" pageLink="/about/intro" bg={bgHeader} />

            <section className={styles.intro}>
                <div className={styles.init}>
                    <div className={`${styles.imgWrapper} ${styles.imgWrapperFirst}`}>
                        <Image src={imgPath} alt="image" layout={"fill"}/>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            تاسیس بیمه آرمان
                        </h2>
                        <p className={styles.desc}>
                            شرکت بیمه آرمان ( سهامی عام ) به موجب قانون تاسیس بیمه گری و با مجوز شماره ۴۱۹۸۰۱ بیمــه
                            مرکزی جمهوری اسلامی ایـران در تاریخ ۱۳۹۰/۱۰/۰۷ در اداره ثبت شرکتها و مؤسسات غیر تجاری، به
                            ثبت رسید و پروانه فعالیت بیمه گری در انواع رشته های بیمه ای را تحت شماره ۴۳۵۴۱/۹۰ مورخ
                            ۱۳۹۰/۱۱/۱۸ بیمه مرکزی جمهوری اسلامی ایران دریافت کرد.
                        </p>
                        <p className={styles.desc}>
                            سرمایه اولیه شرکت در زمان تأسیس ۶۰۰ میلیارد ریال بود که با مشارکت شرکت ها و بنگاههای مالی،
                            اقتصادی و خدماتی در اداره ثبت شرکت در تهران به ثبت رسید. هیأت مدیرهشرکت به منظور حضور
                            قدرتمند در بازار بیمه و سرمایه کشور، افزایش سرمایه شرکت را تا مبلغ ۲۶۴۰میلیارد ریال در تاریخ
                            ۱۳۹۱/۰۳/۰۹ تصویب کرد و به دنبال آن مجمع عمومی فوق العاده در تاریخ ۱۳۹۲/۰۴/۰۲ تشکیل شد و خذ
                            مجوز افزایش سرمایه از بیمه مرکزی ج.ا.ا وسازمان بورس اوراق بهادار، سهامداران با افزایش سرمایه
                            شرکت موافقت کردند
                        </p>
                    </div>
                </div>
                <Card className={`${styles['mb-2']} ${styles['no-padding']}`}>
                    <div className={styles.init}>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                نیروی انسانی
                            </h2>
                            <p className={styles.desc}>
                                بیمه آرمان با در نظر گرفتن این واقعیت که ارایه خدمات بیمه ای رضایت بخش و منطبق با نیازهای
                                بیمه ای بیمه گذاران مستلزم بهره مندی از دانش و تجربه نیروی انسانی است، کارشناسان خود را که
                                تعداد آنها بالغ بر 341 نفر است
                            </p>
                            <div className={styles.stat}>
                                <div className={styles.items}>
                                <span>
                              <AboutBranch/>
                          </span>
                                    <div className={styles.wrapper}>
                                <span className={styles.numTitle}>
                                شعب فعال
                            </span>
                                        <span className={styles.number}>
                                        +
                                        <CounterUp end={35}/>
                                    </span>
                                    </div>
                                </div>
                                <div className={styles.items}>
                          <span>
                              <AboutBranch/>
                          </span>
                                    <div className={styles.wrapper}>
                                <span className={styles.numTitle}>
                                نیروی انسانی
                            </span>
                                        <span className={styles.number}>
                                        +
                                        <CounterUp end={341}/>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgWrapper}>
                            <Image src={hrImage} alt="image" layout={"fill"}/>
                        </div>
                    </div>
                    <div className={styles.saham}>
                        <h2>
                            سهامداران
                        </h2>
                        <div>
                            <DownloadCard>
                                دریافت مشخصات سهام داران
                            </DownloadCard>
                            <DownloadCard>
                                دریافت مشخصات سهام داران
                            </DownloadCard>
                            <DownloadCard>
                                دریافت مشخصات سهام داران
                            </DownloadCard>
                        </div>
                    </div>
                </Card>
                <Card className={`${styles['mb-2']} ${styles['no-padding']}`}>
                    <div className={styles.init}>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                کیفیت عملکرد
                            </h2>
                            <p className={styles.desc}>
                                کیفیت عملکرد هر شرکت بیمه ای در زمان انجام تعهدات نمایان می شود. شرکت  بیمۀ آرمان به منظور پیشگیری از مواجهه بیمه گذاران با مشکلات  احتمالی ناشی از تحقق خطرات تحت پوشش بیمه نامه های صادره، با تاکید بر تنظیم مندرجات بیمه نامه ها متناسب با وضعیت ریسک و نیاز  بیمه گذاران و همچنین صدور بیمه نامه های شفاف مبتنی بر اصول، قوانین و مقررات بیمه ای که رعایت آنها در نهایت متضمن منافع برای بیمه گذاران است، روابط خود با بیمه گذاران را بر اصولی استوار ساخته که آنان تعهدات این شرکت را پشتوانه اطمینان بخش فعالیت های خود قرار دهند که در این ارتباط کمترین میزان شکایات مطروحه از این شرکت در بیمه مرکزی موید بالا بودن کیفیت عملکرد این شرکت است.
                            </p>
                        </div>
                    </div>
                    <div className={styles.init}>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                نوآوری
                            </h2>
                            <p className={styles.desc}>
                                شرکت بیمۀ آرمان بنحو مقتضی با جمع آوری روزانه اطلاعات از بازارهای داخلی و خارجی بیمه ؛ تغییرات، تحولات و نیازهای بیمه گذاران را مورد تجزیه و تحلیل قرار داده و  همگام با تغییرات و تحولات با مدل سازی جدید فرآیندهای صدور خسارت ، تسهیلات لازم را برای افزایش خدمات و تسریع در تسویه خسارات فراهم می نماید. شرکت ایجاد هماهنگی بین مدیریت های فنی در زمینه ارایه محصولات جدید از  جمله بیمه های عمر و سرمایه گذاری و سایر بیمه ها را در برنامه های خود گنجانیده است.
                            </p>
                        </div>
                        <div className={styles.imgWrapper}>
                            <Image src={cntImg} alt="image" layout={"fill"}/>
                        </div>
                    </div>
                    <div className={styles.init}>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                عملکرد
                            </h2>
                            <p className={styles.desc}>
                                کیفیت عملکرد هر شرکت بیمه ای در زمان انجام تعهدات نمایان می شود. شرکت  بیمۀ آرمان به منظور پیشگیری از مواجهه بیمه گذاران با مشکلات  احتمالی ناشی از تحقق خطرات تحت پوشش بیمه نامه های صادره، با تاکید بر تنظیم مندرجات بیمه نامه ها متناسب با وضعیت ریسک و نیاز  بیمه گذاران و همچنین صدور بیمه نامه های شفاف مبتنی بر اصول، قوانین و مقررات بیمه ای که رعایت آنها در نهایت متضمن منافع برای بیمه گذاران است، روابط خود با بیمه گذاران را بر اصولی استوار ساخته که آنان تعهدات این شرکت را پشتوانه اطمینان بخش فعالیت های خود قرار دهند که در این ارتباط کمترین میزان شکایات مطروحه از این شرکت در بیمه مرکزی موید بالا بودن کیفیت عملکرد این شرکت است.
                            </p>
                        </div>
                    </div>
                    <div className={styles.init}>
                        <div className={`${styles.imgWrapper} ${styles.singleImg}`}>
                            <Image src={singleImg} alt="image" layout={"fill"}/>
                        </div>
                    </div>
                </Card>
                <Card className={styles['mb-2']}>
                    <div className={styles.init}>
                        <div className={styles.imgWrapper}>
                            <Image src={innovation} alt="image" layout={"fill"}/>
                        </div>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                شبکه فروش
                            </h2>
                            <p className={styles.desc}>
                                با توجه به پراکندگی متقاضیان بیمه و بیمه گذاران در مناطق مختلف کشور، شرکت بیمۀ آرمان با تاسیس و  راه اندازی 35 شعبه در مرکز استان ها و بعضی از شهرهای بزرگ و همچنین با در اختیار داشتن حدود  360  نمایندگی در اقصی نقاط کشور  که به تعداد قابل توجهی از آنان اختیار بازدید و صدور بیمه نامه تفویض  گردیده است، امکانات لازم را برای ارایه خدمات بیمه ای در شهر یا منطقه محل استقرار بیمه گذاران و بیمه شدگان فراهم کرده که با اجرای برنامه های از پیش تعیین شده شبکه فروش به طور مستمر در حال توسعه است.
                            </p>
                        </div>
                    </div>
                </Card>
                <Accordion
                    question='توانگری مالی'
                    answer='با توجه به پراکندگی متقاضیان بیمه و بیمه گذاران در مناطق مختلف کشور، شرکت بیمۀ آرمان با تاسیس و  راه اندازی 35 شعبه در مرکز استان ها و بعضی از شهرهای بزرگ و همچنین با در اختیار داشتن حدود  360  نمایندگی در اقصی نقاط کشور  که به تعداد قابل توجهی از آنان اختیار بازدید و صدور بیمه نامه تفویض  گردیده است، امکانات لازم را برای ارایه خدمات بیمه ای در شهر یا منطقه محل استقرار بیمه گذاران و بیمه شدگان فراهم کرده که با اجرای برنامه های از پیش تعیین شده شبکه فروش به طور مستمر در حال توسعه است.'
                />
                <Accordion
                    question='بیمه های اتکایی و توزیع ریسک بین بیمه گران اتکایی'
                    answer='با توجه به پراکندگی متقاضیان بیمه و بیمه گذاران در مناطق مختلف کشور، شرکت بیمۀ آرمان با تاسیس و  راه اندازی 35 شعبه در مرکز استان ها و بعضی از شهرهای بزرگ و همچنین با در اختیار داشتن حدود  360  نمایندگی در اقصی نقاط کشور  که به تعداد قابل توجهی از آنان اختیار بازدید و صدور بیمه نامه تفویض  گردیده است، امکانات لازم را برای ارایه خدمات بیمه ای در شهر یا منطقه محل استقرار بیمه گذاران و بیمه شدگان فراهم کرده که با اجرای برنامه های از پیش تعیین شده شبکه فروش به طور مستمر در حال توسعه است.'
                />
                <Accordion
                    question='خدمات پس از فروش'
                    answer='با توجه به پراکندگی متقاضیان بیمه و بیمه گذاران در مناطق مختلف کشور، شرکت بیمۀ آرمان با تاسیس و  راه اندازی 35 شعبه در مرکز استان ها و بعضی از شهرهای بزرگ و همچنین با در اختیار داشتن حدود  360  نمایندگی در اقصی نقاط کشور  که به تعداد قابل توجهی از آنان اختیار بازدید و صدور بیمه نامه تفویض  گردیده است، امکانات لازم را برای ارایه خدمات بیمه ای در شهر یا منطقه محل استقرار بیمه گذاران و بیمه شدگان فراهم کرده که با اجرای برنامه های از پیش تعیین شده شبکه فروش به طور مستمر در حال توسعه است.'
                />
                <Accordion
                    question='سرمایه گذاری'
                    answer='با توجه به پراکندگی متقاضیان بیمه و بیمه گذاران در مناطق مختلف کشور، شرکت بیمۀ آرمان با تاسیس و  راه اندازی 35 شعبه در مرکز استان ها و بعضی از شهرهای بزرگ و همچنین با در اختیار داشتن حدود  360  نمایندگی در اقصی نقاط کشور  که به تعداد قابل توجهی از آنان اختیار بازدید و صدور بیمه نامه تفویض  گردیده است، امکانات لازم را برای ارایه خدمات بیمه ای در شهر یا منطقه محل استقرار بیمه گذاران و بیمه شدگان فراهم کرده که با اجرای برنامه های از پیش تعیین شده شبکه فروش به طور مستمر در حال توسعه است.'
                />
                <div className={styles.slider}>
                    <Title className={styles.title}>
                        تندیس و نشان های بیمه آرمان
                    </Title>
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <Image src={img} alt="image" layout={"fill"} />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className={styles.slider}>
                    <Title className={styles.title}>
                        لوح تقدیر و گواهینامه های بیمه آرمان
                    </Title>
                    {/*<Slider {...settings}>
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <Image src={img} alt="image" layout={"fill"} />
                            </div>
                        ))}
                    </Slider>*/}
                </div>

            </section>
        </Fragment>
    );
};

export default Intro;