import Umbrella from "../icons/umbrella";
import styles from './title-content.module.css';

const TitleContent = (props) => {
    return (
        <p className={styles.title}>
            <Umbrella/>
            {props.children}
        </p>
    )
};

export default TitleContent;