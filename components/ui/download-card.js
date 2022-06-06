import {Fragment} from "react";
import styles from "./download-card.module.css";

const DownloadCard = (props) => {
    return (
        <Fragment>
            <div className={styles.wrapper}>
                <div className={styles.whiteBg}>
                    <div className={styles.purpleBg}>
                        <h3>
                            {props.children}
                        </h3>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default DownloadCard;