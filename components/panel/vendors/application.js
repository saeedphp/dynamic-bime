import {Fragment} from "react";
import styles from './application.module.css';
import Image from "next/image";
import app from '../../../public/images/panel/app.png';
import ios from '../../../public/images/panel/ios.png';
import sibApp from '../../../public/images/panel/sib-app.jpg';
import sibChe from '../../../public/images/panel/sibche.png';
import android from '../../../public/images/panel/android.png';
import playStore from '../../../public/images/panel/play-store.png';
import cafeBazzar from '../../../public/images/panel/cafe-bazzar.png';
import myket from '../../../public/images/panel/myket.png';
import {allIosApp} from "../../../data/ios-app";
import {allAndroidApp} from "../../../data/android-app";

const Application = () => {

    const iosApps = allIosApp();
    const androidApps = allAndroidApp();

    return (
        <Fragment>
            <div className={styles.app}>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        دانلود اپلیکیشن بیمه آرمان
                    </h2>
                    <ul>
                        <li>
                            <span>
                                <Image src={ios} alt="ios-app" layout={"fill"}/>
                            </span>
                        </li>
                        {iosApps.map((item, i) => (
                            <li key={i}>
                            <a href={item.link}>
                                <span>
                                <Image src={`/${item.image}`} alt={item.title} layout={"fill"}/>
                            </span>
                            </a>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <span>
                                <Image src={android} alt="android-app" layout={"fill"}/>
                            </span>
                        </li>
                        {androidApps.map((item, i) => (
                            <li key={i}>
                            <a href={item.link}>
                                <span>
                                <Image src={`/${item.image}`} alt={item.title} layout={"fill"}/>
                            </span>
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.img}>
                    <span>
                        <Image src={app} alt="app" layout={"fill"}/>
                    </span>
                </div>
            </div>
        </Fragment>
    )
};

export default Application;