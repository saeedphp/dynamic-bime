import styles from './contact-form.module.css';
import Image from "next/image";
import imgPath from '../../public/images/contact-img.webp';
import Button from "../ui/button";
import {useEffect, useState} from "react";
import {BASE_URL} from "../../data/config";

const ContactForm = () => {

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
        const post = {name, mobile, text};
        fetch(BASE_URL + "api/v1.0/cms/contactUs", {
            method: "POST",
            headers: {
                'accept': '*/*',
            },
            body: JSON.stringify(post)
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
                            <label htmlFor="name">
                                نام و نام خانوادگی*
                            </label>
                            <p className={styles.error}>
                                {formError.name}
                            </p>
                        </div>
                        <input className={formError.name ? 'error' : ''} id="name" name="name" type="text" value={formValues.name} onChange={handleChange}/>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.labelWrapper}>
                            <label htmlFor="mobile">
                                شماره موبایل*
                            </label>
                            <p className={styles.error}>
                                {formError.mobile}
                            </p>
                        </div>
                        <input className={formError.mobile ? 'error' : ''} id="mobile" name="mobile" type="tel" value={formValues.mobile} onChange={handleChange} />
                    </div>
                    <div className={styles.controls}>
                       <div className={styles.labelWrapper}>
                           <label htmlFor="complain">
                               انتقاد و پیشنهاد شما*
                           </label>
                           <p className={styles.error}>
                               {formError.subject}
                           </p>
                       </div>
                        <textarea className={formError.subject ? 'error' : ''} name="subject" value={formValues.subject} onChange={handleChange} >

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