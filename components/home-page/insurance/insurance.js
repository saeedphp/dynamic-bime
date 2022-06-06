import styles from './insurance.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/insurance.webp';
import Button from "../../ui/button";
import {getAllInsurance} from "../../../data/all-insurance";

const Insurance = () => {

    const allInsurances = getAllInsurance();

    return (
        <section className={styles.insurance}>
            <div className={styles['insurance__image']}>
                <Image src={imgPath} alt="insurance image" layout={"fill"}/>
            </div>
            <div className={styles['insurance__info']}>
                <h2 className={styles.title}>
                    صدور بیمه نامه های آنلاین
                </h2>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربرد های متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <ul>
                    {allInsurances.map((allInsurance) => (
                        <li key={allInsurance.id}>
                            {allInsurance.title}
                        </li>
                    ))}
                </ul>
                <a href="https://bime24.com">
                    <Button>
                        مشاهده تمامی خدمات
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Insurance;