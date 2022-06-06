import styles from "./accordion.module.css";
import FaqItem from "../icons/faq-item";
import ActiveArrow from "../icons/active-arrow";
import DownArrow from "../icons/down-arrow";
import {useState} from "react";

const Accordion = (props) => {

    const [opened, setOpened] = useState(null);

    const {id, question, answer} = props;

    const toggle = (id) => {
        if (opened === id) {
            return setOpened(null)
        }
        setOpened(id);
    };

    return (
        <div className={styles.items}>
            <div onClick={() => toggle(id)}
                 className={`faqTitle ${styles['faq-question']} ${opened === (id) ? 'active' : null}`}>
                <div className={`icon ${styles['icon-part']}`}>
                    <FaqItem/>
                    <h3>
                        {props.question}
                    </h3>
                </div>

                <span>
                        {opened === (id) ?
                            <ActiveArrow/>
                            :
                            <DownArrow/>
                        }
                    </span>

            </div>
            <div className={`faq-answer ${styles['faq-answer']} ${opened === (id) ? 'active' : null}`}>
                <p>
                    {props.answer}
                </p>
            </div>
        </div>
    );
};

export default Accordion;