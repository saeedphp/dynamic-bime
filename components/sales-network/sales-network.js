import {Fragment, useState} from "react";
import styles from './sales-network.module.css';
import PageHeader from "../ui/page-header";
import Card from "../ui/card";
import TitleContent from "../ui/title-content";
import {NextSeo} from "next-seo";
import imgPath from '../../public/images/page-header.webp';

const SalesNetWork = ({rules}) => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <NextSeo title="قوانین و مقررات">

            </NextSeo>
            <PageHeader title="قوانین و مقررات" pageTitle="شبکه فروش" pageLink="" bg={imgPath}/>
            <Card className={styles.rules}>
                <nav className="rules-tab">
                    <ul>
                        {rules.map((item, i) => (
                            <li className={toggle === i ? 'active' : null} onClick={() => {toggleTab(i)}} key={i}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.content}>
                    {rules.map((item, i) => (
                        <div key={i}>
                            {
                                function createMarkup() {
                                    return {__html: `${item.description}`};
                                }
                            }
                            {toggle === i ? (

                                    <p key={i} dangerouslySetInnerHTML={{__html: item.description}}>

                                    </p>
                                ) :
                                null}
                        </div>
                    ))}
                </div>
            </Card>
        </Fragment>
    );
};

export default SalesNetWork;