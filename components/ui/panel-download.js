import styles from './panel-download.module.css';
import Download from "../icons/download";

const PanelDownload = (props) => {

    const classes = ' ' + props.className;

    return (
        <a href={props.href} className={`${styles.link} ${classes}`}>
            <span>
                <Download />
            </span>
            {props.children}
        </a>
    );
};

export default PanelDownload;