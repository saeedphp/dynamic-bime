import Title from "../../ui/title";
import styles from "./personel-item.module.css";
import Image from "next/image";
import {getAllPersonel} from "../../../data/personel";

const PersonelItem = ({jobs, users}) => {

    let allItems = []
    jobs.forEach(element => {
        let user_items = []
        users.forEach(user => {
            try {
                if (user.jobPositionGetResponseDto.id == element.id) {
                    user_items.push({
                        id: user.id,
                        image: "https://bimeharman.faradns.ir/" + user.customFileGetResponseDto.url,
                        name: user.firstName + " " + user.lastName,
                        position: user.jobPositionGetResponseDto.title,
                        tel: user.mobileNumber,
                        inner: 1422,
                        mail: user.email,
                    })
                }
            } catch {}
        })
        allItems.push({
            id: element.id,
            title: element.title,
            items: user_items
        })
    });
    // const allItems = getAllPersonel();

    return (
        (allItems.map((item) => (
            <li key={item.id}>
                <Title>
                    {item.title}
                </Title>
                <div className={styles['personal-item']}>
                    {item.items.map((values) => (
                        <div key={values.id} className={styles.wrapper}>
                            <div className={styles.items}>
                                <div className={styles.imgWrapper}>
                                    <Image src={values.image} alt={values.name} layout={"fill"} />
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.name}>
                                        {values.name}
                                    </h3>
                                    <h4 className={styles.position}>
                                        {values.position}
                                    </h4>
                                    <div className={styles.btn}>
                                        <a className={styles.tel}>
                                            <i></i>
                                            شماره تماس : {values.tel} داخلی {values.inner}
                                        </a>
                                        <a className={styles.mail}>
                                            <i></i>
                                            {values.mail}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </li>
        )))
    )
};

export default PersonelItem;