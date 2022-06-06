import Card from "../../ui/card";
import Manager from "../../icons/branch/manager";
import Tel from "../../icons/branch/tel";
import Address from "../../icons/branch/address";
import styles from './city-item.module.css';
import Title from "../../ui/title";

const CityItem = (props) => {

    const {title, manager, tel, address, postCard} = props;

    return (
        <Card className={styles.items}>
            <li>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.desc}>
                    <Manager />
                    رئیس شعبه:
                    {manager}
                </p>
                <p className={styles.desc}>
                    <Tel />
                    شماره تماس:
                    {tel}
                </p>
                <p className={styles.desc}>
                    <Address />
                    آدرس:
                    {address}
                </p>
                <p className={styles.desc}>
                    <Address />
                    کد پستی:
                    {postCard}
                </p>
            </li>
        </Card>
    );
};

export default CityItem;