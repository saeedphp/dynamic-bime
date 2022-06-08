import styles from './contact-form.module.css';
import Image from "next/image";
import imgPath from '../../public/images/contact-img.webp';
import Button from "../ui/button";
import {useEffect, useState} from "react";
import {BASE_URL} from "../../data/config";

const ContactForm = () => {

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
        fetch(BASE_URL + "api/v1.0/cms/contactUs", {
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
        const regex = /^[^\s@\+@[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullName) {
            errors.fullName = 'نام الزامی است!';
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = 'شماره موبایل الزامی است!';
        }else if (values.mobileNumber.length < 11) {
            errors.mobileNumber = 'شماره همره نباید کمتر از 11 رقم باشد!';
        }else if (values.mobileNumber.length > 11) {
            errors.mobileNumber = 'شماره همره نباید بیشتر از 11 رقم باشد!';
        }
        if (!values.text) {
            errors.text = 'موضوغ الزامی است!';
        }
        return errors
    }

    const [social, setSocial] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/socialMedia/active?pageIndex=0&pageSize=10", {
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

                setSocial(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    let handleSubmit = (e) => {
        e.preventDefault();
        const post = {name, mobile, text, };

        fetch(BASE_URL + "api/v1.0/cms/contactUs", {
            method: "POST",
            headers: {
                'accept': '*/*',
            },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post');
        })
    };

    return (
        <div className={styles['contact-form']}>
            <div className={styles.social}>
                <div>
                    <ul>
                        {social.map((item ,i) => (
                            <li key={i}>
                                <a href={item.url}>
                                    <span>
                                        <Image src={BASE_URL + item.customFileGetResponseDto.url} alt={item.title} layout={"fill"} />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Image src={imgPath} alt="image" layout={"fill"}/>
                </div>
            </div>
            <div className={styles.form}>
                <h2>
                    با ما در ارتباط باشید
                </h2>

                {/*<pre>{JSON.stringify(formValues, undefined, 2)}</pre>*/}
                <form method="post" id="myform" onSubmit={submitForm}>
                    {Object.keys(formError).length === 0 && isSubmit ? (
                        <div className={`${styles.controls} success`}><p>با موفقیت ارسال شد</p></div>
                    ) : ''}
                    <div className={styles.controls}>
                        <div className={styles.labelWrapper}>
                            <label htmlFor="fullName">
                                نام و نام خانوادگی*
                            </label>
                            <p className={styles.error}>
                                {formError.fullName}
                            </p>
                        </div>
                        <input className={formError.fullName ? 'error' : ''} id="fullName" name="fullName" type="text" value={formValues.fullName} onChange={handleChange}/>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.labelWrapper}>
                            <label htmlFor="mobileNumber">
                                شماره موبایل*
                            </label>
                            <p className={styles.error}>
                                {formError.mobileNumber}
                            </p>
                        </div>
                        <input className={formError.mobileNumber ? 'error' : ''} id="mobileNumber" name="mobileNumber" type="tel" value={formValues.mobileNumber} onChange={handleChange} />
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.labelWrapper}>
                            <label htmlFor="complain">
                                انتقاد و پیشنهاد شما*
                            </label>
                            <p className={styles.error}>
                                {formError.text}
                            </p>
                        </div>
                        <textarea className={formError.text ? 'error' : ''} name="text" value={formValues.text} onChange={handleChange} >

                        </textarea>
                    </div>

                    <input type="hidden" id="isActive" name="isActive" value="1" />
                    <input type="hidden" id="cultureLcid" name="cultureLcid" value="1065" />
                    <input type="hidden" id="ordering" name="ordering" value="1" />

                    <div className={styles.controls}>
                        <Button>
                            ارسال پیام
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;