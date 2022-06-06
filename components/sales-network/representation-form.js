import styles from './representation-form.module.css';
import Button from "../ui/button";
import React, {useState} from 'react';

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

    return (
        <form className={styles.form}>
            <div className={styles.controls}>

                <div>
                    <label htmlFor="name">
                        نام
                    </label>
                    <input id="name" name="name" type="text"/>
                </div>

                <div>
                    <label htmlFor="family">
                        نام خانوادگی
                    </label>
                    <input id="family" name="family" type="text"/>
                </div>

                <div>
                    <label htmlFor="father">
                        نام پدر
                    </label>
                    <input id="father" name="father" type="text"/>
                </div>

            </div>

            <div className={styles.controls}>

                <div className={styles.gender}>
                    <p>
                        جنسیت
                    </p>
                    <div>
                        <input id="female" name="gender" type="radio"/>
                        <label htmlFor="female">
                            زن
                        </label>

                        <input id="male" name="gender" type="radio"/>
                        <label htmlFor="male">
                            مرد
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="birth">
                        تاریخ تولد
                    </label>
                    <input id="birth" name="birth" type="date"/>
                </div>

                <div>
                    <label htmlFor="id">
                        کد ملی
                    </label>
                    <input id="id" min="1" max="10" maxLength="10" name="id" type="tel"/>
                </div>

            </div>

            <div className={styles.controls}>

                <div>
                    <label htmlFor="mobile">
                        تلفن همراه
                    </label>
                    <input id="mobile" max="11" maxLength="11" name="mobile" type="tel"/>
                </div>

                <div className={styles.ostan}>
                    <label>
                        آخرین مدرک تحصیلی
                    </label>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="field">
                        رشته تحصیلی
                    </label>
                    <input id="field" name="field" type="text"/>
                </div>

            </div>

            <div className={styles.controls}>

                <div className={styles.ostan}>
                    <label>
                        وضعیت نظام وظیفه
                    </label>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>

                <div style={{display: "none"}} className={styles.ostan}>
                    <label>
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
                        placeholder="State"
                        value={selectedState}
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
                        <input id="yes" name="experience" type="radio"/>
                        <label htmlFor="yes">
                            بله
                        </label>

                        <input id="no" name="experience" type="radio"/>
                        <label htmlFor="no">
                            خیر
                        </label>
                    </div>
                </div>

            </div>

            <div className={styles.controls}>

                <div style={{width: "100%"}}>
                    <label htmlFor="description">
                        توضیحات
                    </label>
                    <textarea name="description">

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