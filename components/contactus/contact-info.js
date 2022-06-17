import styles from './contact-info.module.css';
import {Fragment, useEffect, useState} from "react";
import Mail from "../icons/contacts/mail";
import Tel from "../icons/contacts/tel";
import Pin from "../icons/contacts/pin";
import {BASE_URL} from "../../data/config";

const ContactInfo = () => {

    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/setting/address", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setAddress(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);
    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/setting/contact-tel", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setTel(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);
    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/setting/contact-email", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setEmail(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className={styles.info}>
            <div className={styles.items}>
                <Mail/>
                <a href={`mailto:${email.value}`}>
                    {email.value}
                </a>
            </div>
            <div className={styles.items}>
                <Tel />
                <a href={`tel:${tel.value}`}>
                    {tel.value}
                </a>
            </div>
            <div className={styles.items}>
                <Pin />
                <address>
                    {address.value}
                </address>
            </div>
        </div>
    )
};

export default ContactInfo;