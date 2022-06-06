import styles from './intro.module.css';
import IndexIntroPerson from "../../icons/index-intro-person";
import Button from "../../ui/button";
import bg from '../../../public/images/intro/suggest.png';

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.wrapper}>
                <div className={`${styles.person}`}>
                    <div className={styles.personWrapper}>
                        <IndexIntroPerson />
                    </div>
                    <div className={styles['dashedBorder__first']}>

                    </div>
                    <div className={styles['dashedBorder__second']}>
                        <div className={styles.first}>
                            <Button link="/customerservice/damagebranch">
                                مراکز پرداخت خسارت
                            </Button>
                        </div>
                        <div className={styles.second}>
                            <Button link="/customerservice/healthcenter">
                                مشاهده مراکز درمانی
                            </Button>
                        </div>
                        <div className={styles.third}>
                            <Button link="/salesnetwork/branch">
                                مشاهده شعب و نمایندگی
                            </Button>
                        </div>
                        <div className={styles.fourth}>
                            <Button link="/customerservice/suggestions">
                                پیشهادات و انتقادات
                            </Button>
                        </div>
                    </div>
                    <div className={styles['dashedBorder__third']}>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;