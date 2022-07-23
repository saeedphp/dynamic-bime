import {Fragment, useEffect, useState} from "react";
import styles from './link.module.css';
import Card from "../../ui/card";
import Image from "next/image";
import img from '../../../public/images/panel/automation.png';
import {getAllPanelLinks} from "../../../data/panel-links";
import {BASE_URL} from "../../../data/config";

const Links = () => {

    const allLinks = getAllPanelLinks();

    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/usefulLink/list/personnelLink?pageIndex=0&pageSize=100", {
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

                setLinks(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <Fragment>
            <Card className={styles.link}>
                {links.map((item, i) => (
                    <div key={i} className={styles.item}>
                  <span>
                          <Image src={img} alt="image" layout={"fill"}/>
                      </span>
                        <a href={item.url}>
                            {item.title}
                        </a>
                    </div>
                ))}
            </Card>
        </Fragment>
    );
};

export default Links;