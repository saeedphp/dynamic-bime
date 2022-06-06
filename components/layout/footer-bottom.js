import styles from "./footer-bottom.module.css";
import SocialLinkdin from "../icons/social-linkdin";
import SocialTelegram from "../icons/social-telegram";
import SocialInsta from "../icons/social-insta";
import {useEffect, useState} from "react";
import {BASE_URL} from "../../data/config";
import Image from "next/image";

const FooterBottom = () => {

    const [social, setSocial] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/socialMedia/active?pageIndex=0&pageSize=10", {
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

                setSocial(data.result);
                console.log(setSocial);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className={styles['footer-bottom']}>
            <ul className={styles.social}>
                {social.map((item ,i) => (
                    <li key={i}>
                        <a href={item.url}>
                            <span>
                                        <Image src={BASE_URL + item.customFileGetResponseDto.url} alt={item.title} layout={"fill"} />
                                    </span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className={styles.copyRight}>
                <p>
                    کلیه حقوق متعلق به بیمه آرمان می باشد
                </p>
            </div>
            <div className={styles.copyRight}>
                <p>
                    طراحی و اجرا توسط
                    <a href="https://faramouj.ir">
                        فراموج
                    </a>
                </p>
            </div>
        </div>
    )
};

export default FooterBottom;