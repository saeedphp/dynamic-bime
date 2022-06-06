import {Fragment} from "react";
import styles from './loader.module.css';

const Loader = () => {
    return (
        <Fragment>
            <div className={styles.loader}></div>
        </Fragment>
    )
};

export default Loader;