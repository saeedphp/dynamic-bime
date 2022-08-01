import styles from './representation-form.module.css';
import Button from "../ui/button";
import React, {useState, useRef} from 'react';
import Cookies from 'universal-cookie';
import {BASE_URL, BASE_URL_UPLOAD_IMG} from "../../data/config";
import {retry} from "@reduxjs/toolkit/query";

const data = {
    provinces: [
        {
            name: "IRAN",
            states: [
                {
                    name: "آذربایجان شرقی",
                    cities: ['آذرشهر' ,'اسکو' ,'اهر' ,'بستان‌آباد' ,'بناب' ,'تبریز' ,'جلفا' ,'چاراویماق' ,'سراب' ,'شبستر', 'مراغه'],
                },
                {
                    name: "آذربایجان غربی",
                    cities: ['ارومیه' ,'اشنویه' ,'بوکان' ,'پیرانشهر' ,'تکاب' ,'چالدران' ,'خوی' ,'سردشت' ,'سلماس' ,'شاهین‌دژ' ,'ماکو' ,'مهاباد' ,'میاندوآب' ,'نقده'],
                },
                {
                    name: "اردبیل",
                    cities: ['اردبیل' ,'بیله‌سوار' ,'پارس‌آباد' ,'خلخال' ,'کوثر' ,'گِرمی' ,'مِشگین‌شهر' ,'نَمین' ,'نیر'],
                },
                {
                    name: "اصفهان",
                    cities: ['آران و بیدگل' ,'اردستان' ,'اصفهان' ,'برخوار و میمه' ,'تیران و کرون' ,'چادگان' ,'خمینی‌شهر' ,'خوانسار' ,'سمیرم' ,'شهرضا' ,'سمیرم سفلی' ,'فریدن' ,'فریدون‌شهر' ,'فلاورجان' ,'کاشان' ,'گلپایگان' ,'لنجان' ,'مبارکه' ,'نائین' ,'نجف‌آباد' ,'نطنز'],
                },
                {
                    name: "البرز",
                    cities: ['کرج', 'نظرآباد', 'فردیس', 'اشتهارد', 'هشتگرد', 'طالقان'],
                },
                {
                    name: "ایلام",
                    cities: ['آبدانان' ,'ایلام' ,'ایوان' ,'دره‌شهر' ,'دهلران' ,'شیروان و چرداول' ,'مهران'],
                },
                {
                    name: "بوشهر",
                    cities: ['بوشهر' ,'تنگستان' ,'جم' ,'دشتستان' ,'دشتی','دیر' ,'دیلم' ,'کنگان' ,'گناوه'],
                },
                {
                    name: "تهران",
                    cities: ['اسلام‌شهر' ,'پاکدشت' ,'تهران' ,'دماوند' ,'رباط‌کریم' ,'ری' ,'ساوجبلاغ' ,'شمیرانات' ,'شهریار' ,'فیروزکوه' ,'ورامین'],
                },
                {
                    name: "چهار محال و بختیاری",
                    cities: ['اردل' ,'بروجن' ,'شهرکرد' ,'فارسان' ,'کوهرنگ' ,'لردگان'],
                },
                {
                    name: "خراسان جنوبی",
                    cities: ['بیرجند' ,'درمیان' ,'سرایان' ,'سربیشه' ,'فردوس' ,'قائنات','نهبندان'],
                },
                {
                    name: "خراسان رضوی",
                    cities: ['بردسکن' ,'تایباد' ,'تربت جام' ,'تربت حیدریه' ,'چناران' ,'خلیل‌آباد' ,'خواف' ,'درگز' ,'رشتخوار' ,'سبزوار' ,'سرخس' ,'فریمان' ,'قوچان' ,'کاشمر' ,'کلات' ,'گناباد' ,'مشهد' ,'مه ولات' ,'نیشابور'],
                },
                {
                    name: "خراسان شمالی",
                    cities: ['اسفراین' ,'بجنورد' ,'جاجرم' ,'شیروان' ,'فاروج' ,'مانه و سملقان'],
                },
                {
                    name: "خوزستان",
                    cities: ['آبادان' ,'امیدیه' ,'اندیمشک' ,'اهواز' ,'ایذه' ,'باغ‌ملک' ,'بندر ماهشهر' ,'بهبهان' ,'خرمشهر' ,'دزفول' ,'دشت آزادگان' ,'رامشیر' ,'رامهرمز' ,'شادگان' ,'شوش' ,'شوشتر'],
                },
                {
                    name: "زنجان",
                    cities: ['ابهر' ,'ایجرود' ,'خدابنده' ,'خرمدره' ,'زنجان' ,'طارم' ,'ماه‌نشان'],
                },
                {
                    name: "سمنان",
                    cities: ['دامغان' ,'سمنان' ,'شاهرود' ,'گرمسار' ,'مهدی‌شهر'],
                },
                {
                    name: "سیستان بلوچستان",
                    cities: ['ایرانشهر' ,'چابهار' ,'خاش' ,'دلگان' ,'زابل' ,'زاهدان' ,'زهک' ,'سراوان' ,'سرباز' ,'کنارک' ,'نیک‌شهر'],
                },
                {
                    name: "فارس",
                    cities: ['آباده' ,'ارسنجان' ,'استهبان' ,'اقلید' ,'بوانات' ,'پاسارگاد' ,'جهرم' ,'خرم‌بید' ,'خنج' ,'داراب' ,'زرین‌دشت' ,'سپیدان' ,'شیراز' ,'فراشبند' ,'فسا' ,'فیروزآباد' ,'قیر و کارزین' ,'کازرون' ,'لارستان' ,'لامِرد' ,'مرودشت' ,'ممسنی' ,'مهر' ,'نی‌ریز'],
                },
                {
                    name: "قزوین",
                    cities: ['آبیک' ,'البرز' ,'بوئین‌زهرا' ,'تاکستان' ,'قزوین'],
                },
                {
                    name: "قم",
                    cities: ['قم'],
                },
                {
                    name: "کردستان",
                    cities: ['بانه' ,'بیجار' ,'دیواندره' ,'سروآباد' ,'سقز' ,'سنندج' ,'قروه' ,'کامیاران' ,'مریوان'],
                },
                {
                    name: "کرمان",
                    cities: ['بافت' ,'بردسیر' ,'بم' ,'جیرفت' ,'راور' ,'رفسنجان' ,'رودبار جنوب' ,'زرند' ,'سیرجان' ,'شهر بابک' ,'عنبرآباد' ,'قلعه گنج' ,'کرمان' ,'کوهبنان' ,'کهنوج' ,'منوجان'],
                },
                {
                    name: "کرمانشاه",
                    cities: ['اسلام‌آباد غرب' ,'پاوه' ,'ثلاث باباجانی' ,'جوانرود' ,'دالاهو' ,'روانسر' ,'سرپل ذهاب' ,'سنقر' ,'صحنه' ,'قصر شیرین' ,'کرمانشاه' ,'کنگاور' ,'گیلان غرب' ,'هرسین'],
                },
                {
                    name: "کوهگیلویه و بویراحمد",
                    cities: ['بویراحمد' ,'بهمئی' ,'دنا' ,'کهگیلویه' ,'گچساران'],
                },
                {
                    name: "گلستان",
                    cities: ['آزادشهر' ,'آق‌قلا' ,'بندر گز' ,'ترکمن' ,'رامیان' ,'علی‌آباد' ,'کردکوی' ,'کلاله' ,'گرگان' ,'گنبد کاووس' ,'مراوه‌تپه' ,'مینودشت'],
                },
                {
                    name: "گیلان",
                    cities: ['آستارا' ,'آستانه اشرفیه' ,'اَملَش' ,'بندر انزلی' ,'رشت' ,'رضوانشهر' ,'رودبار' ,'رودسر' ,'سیاهکل' ,'شَفت' ,'صومعه‌سرا' ,'طوالش' ,'فومَن' ,'لاهیجان' ,'لنگرود' ,'ماسال'],
                },
                {
                    name: "لرستان",
                    cities: ['ازنا' ,'الیگودرز' ,'بروجرد' ,'پل‌دختر' ,'خرم‌آباد' ,'دورود' ,'دلفان' ,'سلسله ,کوهدشت'],
                },
                {
                    name: "مازندران",
                    cities: ['آمل' ,'بابل' ,'بابلسر' ,'بهشهر' ,'تنکابن' ,'جویبار' ,'چالوس' ,'رامسر' ,'ساری' ,'سوادکوه' ,'قائم‌شهر' ,'گلوگاه' ,'محمودآباد' ,'نکا' ,'نور' ,'نوشهر'],
                },
                {
                    name: "مرکزی",
                    cities: ['آشتیان' ,'اراک' ,'تفرش' ,'خمین' ,'دلیجان' ,'زرندیه' ,'ساوه' ,'شازند' ,'کمیجان' ,'محلات'],
                },
                {
                    name: "هرمزگان",
                    cities: ['ابوموسی' ,'بستک' ,'بندر عباس' ,'بندر لنگه' ,'جاسک' ,'حاجی‌آباد' ,'شهرستان خمیر' ,'رودان'  ,'قشم' ,'گاوبندی' ,'میناب'],
                },
                {
                    name: "همدان",
                    cities: ['اسدآباد' ,'بهار' ,'تویسرکان' ,'رزن' ,'کبودرآهنگ' ,'ملایر' ,'نهاوند' ,'همدان'],
                },
                {
                    name: "یزد",
                    cities: ['ابرکوه' ,'اردکان' ,'بافق' ,'تفت' ,'خاتم' ,'صدوق' ,'طبس' ,'مهریز' ,'مِیبُد' ,'یزد'],
                },

            ]
        },
        { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },

        { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
        {
            name: "Mexico",
            states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }]
        },
        {
            name: "India",
            states: [
                { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
            ]
        }
    ]
};

const RepresentationForm = () => {

    const handleChange = (event) => {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };


    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedCity, setSelectedCity] = useState();

    const availableState = data.provinces.find((c) => c.name === 'IRAN');
    const availableCities = availableState?.states?.find(
        (s) => s.name === selectedState
    );

    const cookies = new Cookies();
    const token = cookies.get('token');

    const form = useRef(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [nationalCode, setNationalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [educationField, setEducationField] = useState('');
    const [nezamVazifeStatus, setNezamVazifeStatus] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [hasWorkHistoryOnInsuranceCompanies, setHasWorkHistoryOnInsuranceCompanies] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    }
    const fatherNameChangeHandler = (e) => {
        setFatherName(e.target.value);
    }
    const genderChangeHandler = (e) => {
        setGender(e.target.value);
    }
    const birthDateChangeHandler = (e) => {
        setBirthDate(e.target.value);
    }
    const nationalCodeChangeHandler = (e) => {
        setNationalCode(e.target.value);
    }
    const phoneNumberChangeHandler = (e) => {
        setPhoneNumber(e.target.value);
    }
    const educationLevelChangeHandler = (e) => {
        setEducationLevel(e.target.value);
    }
    const educationFieldChangeHandler = (e) => {
        setEducationField(e.target.value);
    }
    const nezamVazifeStatusChangeHandler = (e) => {
        setNezamVazifeStatus(e.target.value);
    }
    const provinceChangeHandler = (e) => {
        setProvince(e.target.value);
    }
    const cityChangeHandler = (e) => {
        setCity(e.target.value);
    }
    const hasWorkHistoryOnInsuranceCompaniesChangeHandler = (e) => {
        setHasWorkHistoryOnInsuranceCompanies(e.target.value);
    }
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }

    const provinceHandler = (e) => {
        setSelectedState(e.target.value);
    }

    const cityHandler = (e) => {
        setSelectedCity(e.target.value);
    }

    let handleSubmit = async (event) => {

        event.preventDefault();
        setError(null);
        setSuccess(null);
        console.log(firstName);
        console.log(gender);
        console.log(birthDate);
        console.log(hasWorkHistoryOnInsuranceCompanies);
        form.current.reset();
        await fetch(BASE_URL_UPLOAD_IMG + "webservice/home/agency", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                fatherName,
                gender,
                birthDate,
                nationalCode,
                phoneNumber,
                educationLevel,
                educationField,
                nezamVazifeStatus,
                'province': selectedState,
                'city': selectedCity,
                'hasWorkHistoryOnInsuranceCompanies': true,
                description
            }),
        })
            .then(response => {

                console.log(response);
                console.log(response.text());
                if (response.status === 404) {
                    throw new Error('آدرس api اشتباه است!');
                } else if (response.status === 400) {
                    //console.log(response.text());
                    throw new Error('لطفا تمامی مقادیر را پر کنید!')
                } else if (response.ok) {
                    throw new Error('فرم با موفقیت ارسال شد')
                }
                setSuccess(success.message);
                return response.json();
                //return response.json().then(err => Promise.reject(err))

            })
            .then((response) => response.json())
            .then(console.log).catch((error) => {
                console.log('error: ' + error)
                setError(error.message)
            });

    }

    return (
        <form id="myFrom" ref={form} onSubmit={handleSubmit} className={styles.form} method="post">
            {error && <p className={`form_notif error`}>{error}</p>}
            {success && <p className={`form_notif success`}>{success}</p>}
            <div className={styles.controls}>

                <div>
                    <label htmlFor="firstName">
                        نام
                    </label>
                    <input id="firstName" name="firstName" type="text" defaultValue={firstName} onChange={firstNameChangeHandler}/>
                </div>

                <div>
                    <label htmlFor="lastName">
                        نام خانوادگی
                    </label>
                    <input id="lastName" name="lastName" type="text" defaultValue={lastName} onChange={lastNameChangeHandler}/>
                </div>

                <div>
                    <label htmlFor="fatherName">
                        نام پدر
                    </label>
                    <input id="fatherName" name="fatherName" type="text" defaultValue={fatherName} onChange={fatherNameChangeHandler}/>
                </div>

            </div>

            <div className={styles.controls}>

                <div className={styles.gender}>
                    <p>
                        جنسیت
                    </p>
                    <div>
                        <input id="female" name="gender" type="radio" defaultValue="زن" onChange={genderChangeHandler}/>
                        <label htmlFor="female">
                            زن
                        </label>

                        <input id="male" name="gender" type="radio" defaultValue="مرد" onChange={genderChangeHandler}/>
                        <label htmlFor="male">
                            مرد
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="birthDate">
                        تاریخ تولد
                    </label>
                    <input id="birthDate" name="birthDate" type="date" defaultValue={birthDate} onChange={birthDateChangeHandler}/>
                </div>

                <div>
                    <label htmlFor="nationalCode">
                        کد ملی
                    </label>
                    <input id="nationalCode" min="1" max="10" maxLength="10" name="nationalCode" type="tel" defaultValue={nationalCode} onChange={nationalCodeChangeHandler}/>
                </div>

            </div>

            <div className={styles.controls}>

                <div>
                    <label htmlFor="phoneNumber">
                        تلفن همراه
                    </label>
                    <input id="phoneNumber" max="11" maxLength="11" name="phoneNumber" type="tel" defaultValue={phoneNumber} onChange={phoneNumberChangeHandler}/>
                </div>

                <div className={styles.ostan}>
                    <label htmlFor="educationLevel">
                        آخرین مدرک تحصیلی
                    </label>
                    <select name="educationLevel" defaultValue={educationLevel} onChange={educationLevelChangeHandler}>
                        <option value="ابتدایی">ابتدایی</option>
                        <option value="دیپلم">دیپلم</option>
                        <option value="کارشناسی">کارشناسی</option>
                        <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                        <option value="دکتری">دکتری</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="educationField">
                        رشته تحصیلی
                    </label>
                    <input id="educationField" name="educationField" type="text" defaultValue={educationField} onChange={educationFieldChangeHandler}/>
                </div>

            </div>

            <div className={styles.controls}>

                <div className={styles.ostan}>
                    <label htmlFor="nezamVazifeStatus">
                        وضعیت نظام وظیفه
                    </label>
                    <input id="nezamVazifeStatus" name="nezamVazifeStatus" type="text" defaultValue={nezamVazifeStatus} onChange={nezamVazifeStatusChangeHandler}/>
                    {/*<select id="nezamVazifeStatus" name="nezamVazifeStatus" defaultValue={nezamVazifeStatus} onChange={nezamVazifeStatusChangeHandler}>
                        <option value="معافیت تحصیلی">معافیت تحصیلی</option>
                        <option value="معاف">معاف</option>
                        <option value="مشمول">مشمول</option>
                    </select>*/}
                </div>

                <div style={{display: "none"}} className={styles.ostan}>
                    <label htmlFor="province">
                        استان
                    </label>
                    <select
                        placeholder="استان "
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                        <option>کشور</option>
                        {data.provinces.map((value, key) => {
                            return (
                                <option value={value.name} key={key}>
                                    {value.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={styles.ostan}>
                    <label>استان</label>
                    <select
                        name="province"
                        placeholder="State"
                        defaultValue={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        <option>استان</option>
                        {availableState?.states.map((e, key) => {
                            return (
                                <option value={e.name} key={key}>
                                    {e.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={styles.ostan}>
                    <label>شهر</label>
                    <select
                        name="city"
                        placeholder="City"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option>شهر</option>
                        {availableCities?.cities.map((e, key) => {
                            return (
                                <option value={e.name} key={key}>
                                    {e}
                                </option>
                            );
                        })}
                    </select>
                </div>

            </div>

            <div className={styles.controls}>

                <div className={styles.gender}>
                    <p>
                        آیا سابقه فعالیت در شرکت های بیمه ای را دارید؟
                    </p>
                    <div>
                        <input id="yes" name="hasWorkHistoryOnInsuranceCompanies" type="checkbox" defaultValue defaultChecked={hasWorkHistoryOnInsuranceCompanies}  onChange={hasWorkHistoryOnInsuranceCompaniesChangeHandler}/>
                        {/*<input id="yes" name="hasWorkHistoryOnInsuranceCompanies" type="radio" value={true} onChange={hasWorkHistoryOnInsuranceCompaniesChangeHandler}/>
                        <label htmlFor="yes">
                            بله
                        </label>

                        <input id="no" name="hasWorkHistoryOnInsuranceCompanies" type="radio" value={false} onChange={hasWorkHistoryOnInsuranceCompaniesChangeHandler}/>
                        <label htmlFor="no">
                            خیر
                        </label>*/}
                    </div>
                </div>

            </div>

            <div className={styles.controls}>

                <div style={{width: "100%"}}>
                    <label htmlFor="description">
                        توضیحات
                    </label>
                    <textarea name="description" defaultValue={description} onChange={descriptionChangeHandler}>

                    </textarea>
                </div>

            </div>

            <div className={`${styles.controls} ${styles.txtControls}`}>

            </div>

            <Button>
                ثبت نهایی درخواست
            </Button>

        </form>
    )
};

export default RepresentationForm;