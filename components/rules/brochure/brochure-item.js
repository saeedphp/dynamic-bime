import styles from "./brochure-item.module.css";
import Image from "next/image";
import Download from "../../icons/download";

const BrochureItem = (props) => {

    const {id, title, link, backgroundImg} = props;
    const imgPath = `/${backgroundImg}`;

    return (
        <div className={styles.items}>
            <div className={styles.imgWrapper}>
                <Image src={imgPath} alt={title} layout={"fill"} />
            </div>
            <div className={styles.info}>
                <h2>
                    {title}
                </h2>
                <a href={link}>
                    <Download />
                </a>
            </div>
        </div>
    )
};

export default BrochureItem;