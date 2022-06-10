import {Fragment, useEffect, useState} from "react";
import styles from './suggestions.module.css';
import PageHeader from "../../ui/page-header";
import Card from "../../ui/card";
import Button from "../../ui/button";
import {NextSeo} from "next-seo";
import Image from "next/image";
import imgPath from "../../../public/images/page-header.webp";
import img from '../../../public/images/suggest.png';
import {BASE_URL} from "../../../data/config";

const Suggestions = () => {

    const initialValues = {fullName: "", mobileNumber: "", text: "", cultureLcid: 1065, isActive: true, ordering: 1}
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
        const post = {fullName, mobileNumber, text};
        console.log(formValues);
        fetch(BASE_URL + "api/v1.0/cms/suggustion", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'content-type': 'application/json'
            },
            body: JSON.stringify(formValues)
        }).then(() => {
            console.log('new post');
            setErrorForm(validateForm(formValues));
            setIsSubmit(true);
        })

    }

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formError]);

    const validateForm = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'نام الزامی است!';
        }
        if (!values.mobile) {
            errors.mobile = 'شماره موبایل الزامی است!';
        } else if (values.mobile.length < 11) {
            errors.mobile = 'شماره همره نباید کمتر از 11 رقم باشد!';
        } else if (values.mobile.length > 11) {
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
                                        {formError.fullName}
                                    </p>
                                </div>
                                <input className={formError.fullName ? 'error' : ''} id="fullName" name="fullName"
                                       type="text" value={formValues.fullName} onChange={handleChange}/>
                            </div>
                            <div className={styles.control}>
                                <div className={styles.handler}>
                                    <label>
                                        شماره موبایل*
                                    </label>
                                    <p className={styles.error}>
                                        {formError.mobileNumber}
                                    </p>
                                </div>
                                <input className={formError.mobileNumber ? 'error' : ''} id="mobileNumber"
                                       name="mobileNumber" type="tel" value={formValues.mobileNumber}
                                       onChange={handleChange}/>
                            </div>
                            <div className={styles.txt}>
                                <div className={styles.handler}>
                                    <label>
                                        انتقاد و پیشنهادات شما*
                                    </label>
                                    <p className={styles.error}>
                                        {formError.text}
                                    </p>
                                </div>
                                <textarea className={formError.text ? 'error' : ''} name="text" value={formValues.text}
                                          onChange={handleChange}>

                        </textarea>

                                <input type="hidden" id="isActive" name="isActive" value="1" />
                                <input type="hidden" id="cultureLcid" name="cultureLcid" value="1065" />
                                <input type="hidden" id="ordering" name="ordering" value="1" />

                        </div>
                        <Button className={styles.button}>
                            ارسال پیام
                        </Button>
                </div>
            </form>
        </div>
    <div className={styles.img}>
                    <span>
                        <Image src={img} alt="image" layout={"fill"}/>
                    </span>
    </div>
</Card>
</Fragment>
)
};

export default Suggestions;