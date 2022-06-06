import styles from './button.module.css';
import Link from "next/link";

const Button = (props) => {

    const classes = ' ' + props.className;

    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={`${styles.btn} ${classes}`}>
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <button className={`${styles.btn} ${classes}`} onClick={props.onClick}>
            {props.children}
        </button>
    )

};

export default Button;