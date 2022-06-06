import styles from './title.module.css';

const Title = (props) => {

    const classes = ' ' + props.className;

    return (
        <h2 onClick={props.onClick} className={styles.title + classes}>
            {props.children}
        </h2>
    )
};

export default Title;