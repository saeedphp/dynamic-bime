import styles from './all-insurance.module.css';
import Link from "next/link";
import FireInsurance from "../../icons/insurance/fire-insurance";
import ResInsurance from "../../icons/insurance/res-insurance";
import EnergyInsurance from "../../icons/insurance/energy-insurance";
import ShipInsurance from "../../icons/insurance/ship-insurance";
import PeopleInsurance from "../../icons/insurance/people-insurance";
import SpecialInsurance from "../../icons/insurance/special-insurance";
import CarInsurance from "../../icons/insurance/car-insurance";
import InvestmentInsurance from "../../icons/insurance/investment-insurance";

const AllInsurance = () => {
    return (
        <section className={styles['all-insurance']}>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            بیمه آتش سوزی
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <FireInsurance/>
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه مسئولیت
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <FireInsurance/>
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه عمر سرمایه گذاری
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <InvestmentInsurance />
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه مهندسی
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <FireInsurance/>
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه خودرو
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <CarInsurance />
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه های خاص
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <SpecialInsurance />
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه انرژی
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <EnergyInsurance />
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه کشتی و هواپیما
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <ShipInsurance />
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            بیمه اشخاص
                        </a>
                    </Link>
                    <span>
                            <span className={styles['right-arrow__outer']}></span>
                            <span className={styles['right-arrow__inner']}></span>
                            <PeopleInsurance />
                            <span className={styles['left-arrow__inner']}></span>
                            <span className={styles['left-arrow__outer']}></span>
                        </span>
                </li>
            </ul>
        </section>
    )
};

export default AllInsurance;