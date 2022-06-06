import {Fragment} from "react";
import styles from './link.module.css';
import Card from "../../ui/card";
import Image from "next/image";
import img from '../../../public/images/panel/automation.png';
import {getAllPanelLinks} from "../../../data/panel-links";

const Links = () => {

    const allLinks = getAllPanelLinks();

    return (
        <Fragment>
            <Card className={styles.link}>
                {allLinks.map((item, i) => (
                    <div key={i} className={styles.item}>
                  <span>
                          <Image src={`${item.image}`} alt="image" layout={"fill"}/>
                      </span>
                        <a href={`${item.link}`}>
                            {item.title}
                        </a>
                    </div>
                ))}
            </Card>
        </Fragment>
    );
};

export default Links;