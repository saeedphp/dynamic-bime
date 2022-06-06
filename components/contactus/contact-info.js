import styles from './contact-info.module.css';
import {Fragment} from "react";
import Mail from "../icons/contacts/mail";
import Tel from "../icons/contacts/tel";
import Pin from "../icons/contacts/pin";

const ContactInfo = () => {

    return (
        <div className={styles.info}>
            <div className={styles.items}>
                <Mail/>
                <a href="mailto:info@armanins.com">
                    info@armanins.com
                </a>
            </div>
            <div className={styles.items}>
                <Tel />
                <a href="tel:0212856">
                    021-2856
                </a>
            </div>
            <div className={styles.items}>
                <Pin />
                <address>
                    تهران، بلوار میرداماد، خیابان شمس تبریزی جنوبی، پلاک 4
                </address>
            </div>
        </div>
    )
};

export default ContactInfo;