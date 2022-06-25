import {Fragment, useState} from "react";
import styles from './content.module.css';
import PanelDownload from "../../ui/panel-download";
import News from "../../icons/panel/personel/news";
import Image from "next/image";
import mockup from "../../../public/images/panel/panel-mockup.png";
import Card from "../../ui/card";
import Links from "./links";
import search from '../../../public/images/search.png';
import {BASE_URL} from "../../../data/config";

const Content = ({personelCat, personel}) => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <Fragment>

            <div className={styles.sidebar}>
                <div className={styles.panel}>
                    <nav>
                        <ul>
                            {personelCat.map((item, i) => (
                                <li key={i} className={`personel_item ${toggle === i ? 'active' : null}`} onClick={() => {
                                    toggleTab(i)
                                }}>
                                    <a href={`#${item.title}`}>
                                <span>
                                    <News/>
                                </span>
                                        {item.title} - {item.id}
                                    </a>
                                </li>
                                ))}
                        </ul>

                    </nav>
                </div>
                <span className={styles.img}>
                        <Image src={mockup} alt="mockup image" layout={"fill"}/>
                    </span>
            </div>

            <div className={styles.main}>

                <Card className={styles.search}>
                    <span>
                        <Image src={search} alt="search" layout={"fill"} />
                    </span>
                    <input type="text" placeholder="جستجو بر اساس عنوان مورد نظر" value={inputText} onChange={onChange} />
                </Card>

                <div className={styles.box}>

                    <div className={styles.header}>
                        <h4>
                            عنوان
                        </h4>
                        <h4>
                            تاریخ ایجاد
                        </h4>
                        <h4>
                            فرم
                        </h4>
                    </div>

                    <div className={styles.body}>

                        {personelCat.map((personelCategory, i) => (
                            <div key={i}>
                                {personel.filter((item , i) => (
                                    item.personnelPanelCategoryGetResponse.id === personelCategory.id
                                )).filter((item) => {
                                    return (
                                        item.title.includes(inputText)
                                    )
                                })
                                    .map((item, i) => (
                                        <div id={item.title} className={`personel_container ${toggle === i ? 'active' : null}`} key={i}>
                                            <div key={i} className={`${styles.item}`}>
                                                <p>
                                                    {item.title} - <br /> catId: {item.personnelPanelCategoryGetResponse.id} - <br /> id: {item.id}
                                                </p>
                                                <time>
                                                    {new Date(item.insertTime).toLocaleDateString('fa-IR', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </time>
                                                <PanelDownload href={BASE_URL + item.customFileGetResponseDto.url}>
                                                    دانلود فرم
                                                </PanelDownload>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}





                    </div>

                </div>

                <Links />

            </div>

        </Fragment>
    )
};

export default Content;