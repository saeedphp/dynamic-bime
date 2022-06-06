import {Fragment} from "react";
import styles from './all-insurances.module.css';
import {getProducts} from "../../../data/product-insurance";
import Link from "next/link";
import Image from "next/image";
import {BASE_URL} from "../../../data/config";

const AllInsurances = ({insurances}) => {

    const allInsurance = getProducts();

    return (
        <Fragment>
            <section className={styles.insurance}>
                <ul>
                    {insurances.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link href={`/product/${item.id}`}>
                                    <a>
                                    <span className={styles.title}>
                                        {item.title}
                                    </span>
                                        <span className={styles.iconBg}>
                                        {item.image}
                                            <Image src={BASE_URL + item.iconInfo.url} alt={item.title} layout={"fill"} />
                                    </span>
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </Fragment>
    );
};

export default AllInsurances;