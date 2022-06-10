import {Fragment, useState} from "react";
import PageHeader from "../ui/page-header";
import styles from './representation.module.css';
import Card from "../ui/card";
import TitleContent from "../ui/title-content";
import RepresentationForm from "./representation-form";
import {NextSeo} from "next-seo";
import imgPath from "../../public/images/page-header.webp";

const Representation = ({rules}) => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <NextSeo title="اخذ نمایندگی">

            </NextSeo>
            <PageHeader title="اخذ نمایندگی" pageTitle="شبکه فروش" pageLink="" bg={imgPath}/>
            <Card className={styles.representation}>
                <nav className="rules-tab">
                    <ul>
                        {rules.map((item, i) => (
                            <li className={toggle === i ? 'active' : null} onClick={() => {toggleTab(i)}} key={i}>
                                {item.title}
                            </li>
                        ))}
                        <li className={toggle === 3 ? 'active' : null} onClick={() => {
                            toggleTab(3)
                        }}>
                            فرم اخذ نمایندگی
                        </li>
                    </ul>
                </nav>
                <div className={styles.content}>
                    {rules.map((item, i) => (
                        <div key={i}>
                            {toggle === i ? (
                                    <p key={i} dangerouslySetInnerHTML={{__html: item.description}}>

                                    </p>
                                ) :
                                null}
                        </div>
                    ))}

                    {toggle ===3 ? (
                        <RepresentationForm/>
                    ):
                    null}
                </div>
            </Card>
        </Fragment>
    )
};

export default Representation;