import {Fragment, useEffect, useState} from "react";
import styles from './suggestions.module.css';
import PageHeader from "../../ui/page-header";
import Card from "../../ui/card";
import Button from "../../ui/button";
import {NextSeo} from "next-seo";
import Image from "next/image";
import imgPath from "../../../public/images/page-header.webp";
import img from '../../../public/images/suggest.png';

const Suggestions = () => {

    const initialValues = {name: "", mobile: "", subject: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setErrorForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setErrorForm(validateForm(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formError]);

    const validateForm = (values) => {
        const errors = {};
        const regex = /^[^\s@\+@[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = 'نام الزامی است!';
        }
        if (!values.mobile) {
            errors.mobile = 'شماره موبایل الزامی است!';
        }else if (values.mobile.length < 11) {
            errors.mobile = 'شماره همره نباید کمتر از 11 رقم باشد!';
        }else if (values.mobile.length > 11) {
            errors.mobile = 'شماره همره نباید بیشتر از 11 رقم باشد!';
        }
        if (!values.subject) {
            errors.subject = 'موضوغ الزامی است!';
        }
        return errors
    }

    return (
        <Fragment>
            <NextSeo title="انتقادات و پیشنهادات ">

            </NextSeo>
            <PageHeader title="انتقادات و پیشنهادات " pageTitle="امور مشتریان" pageLink="" bg={imgPath}/>
            <Card className={styles.suggestion}>
                <div>
                    <h2>
                        بیمه آرمان پذیرای هر گونه انتقادات و پیشنهادات از سمت شما می باشد.
                    </h2>
                    <form id="myform" method="post" onSubmit={submitForm}>
                        {Object.keys(formError).length === 0 && isSubmit ? (
                            <div className={`${styles.controls} success`}><p>با موفقیت ارسال شد</p></div>
                        ) : ''}
                        <div className={styles.controls}>
                            <div className={styles.control}>
                                <div className={styles.handler}>
                                    <label>
                                        نام و نام خانوادگی*
                                    </label>
                                    <p className={styles.error}>
                                        {formError.name}
                                    </p>
                                </div>
                                <input className={formError.name ? 'error' : ''} id="name" name="name" type="text" onChange={handleChange} />
                            </div>
                            <div className={styles.control}>
                                <div className={styles.handler}>
                                    <label>
                                        شماره موبایل*
                                    </label>
                                    <p className={styles.error}>
                                        {formError.mobile}
                                    </p>
                                </div>
                                <input className={formError.mobile ? 'error' : ''} id="mobile" name="mobile" type="number" onChange={handleChange} />
                            </div>
                            <div className={styles.txt}>
                                <div className={styles.handler}>
                                    <label>
                                        انتقاد و پیشنهادات شما*
                                    </label>
                                    <p className={styles.error}>
                                        {formError.subject}
                                    </p>
                                </div>
                                <textarea className={formError.subject ? 'error' : ''} name="subject" value={formValues.subject} onChange={handleChange} id="suggest">

                            </textarea>
                            </div>
                            <Button className={styles.button}>
                                ارسال پیام
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={styles.img}>
                    <span>
                        <Image src={img} alt="image" layout={"fill"} />
                    </span>
                </div>
            </Card>
        </Fragment>
    )
};

export default Suggestions;