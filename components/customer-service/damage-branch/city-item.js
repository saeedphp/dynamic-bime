import Card from "../../ui/card";
import Manager from "../../icons/branch/manager";
import Tel from "../../icons/branch/tel";
import Address from "../../icons/branch/address";
import styles from './city-item.module.css';
import Title from "../../ui/title";

const CityItem = (props) => {

    const {branchName, branchManager, phoneNumber, exactAddress, postalCode} = props;

    return (
        <Card className={styles.items}>
            <li>
                <p className={styles.title}>
                    {branchName}
                </p>
                <p className={styles.desc}>
                    <Manager />
                    رئیس شعبه:
                    {branchManager}
                </p>
                <p className={styles.desc}>
                    <Tel />
                    شماره تماس:
                    {phoneNumber}
                </p>
                <p className={styles.desc}>
                    <Address />
                    آدرس:
                    {exactAddress}
                </p>
                <p className={styles.desc}>
                    <Address />
                    کد پستی:
                    {postalCode}
                </p>
            </li>
        </Card>
    );
};

export default CityItem;