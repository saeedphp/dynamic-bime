import {Fragment, useState} from "react";
import styles from './renewagentlicense.module.css';
import {NextSeo} from "next-seo";
import PageHeader from "../../ui/page-header";
import bgHeader from "../../../public/images/page-header.webp";
import Card from "../../ui/card";
import Title from "../../ui/title";
import Button from "../../ui/button";
import {BASE_URL} from "../../../data/config";

const Renewagentlicense = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationalCode, setNationalCode] = useState('');
    const [agentCode, setAgentCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [branchId, setBranchId] = useState('');
    const [description, setDescription] = useState('');
    const [personalPictureId, setPersonalPictureId] = useState('');
    const [expiredLicensePictureId, setExpiredLicensePictureId] = useState('');
    const [ezharTaxPictureId, setEzharTaxPictureId] = useState('');
    const [ezharTaxPaymentPictureId, setEzharTaxPaymentPictureId] = useState('');
    const [taxPictureId, setTaxPictureId] = useState('');
    const [taxPaymentPictureId, setTaxPaymentPictureId] = useState('');
    const [rentPictureId, setRentPictureId] = useState('');

    const nameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    }

    const nationalCodeChangeHandler = (e) => {
        setNationalCode(e.target.value);
    }

    const agentCodeChangeHandler = (e) => {
        setAgentCode(e.target.value);
    }

    const phoneNumberChangeHandler = (e) => {
        setPhoneNumber(e.target.value);
    }

    const branchIdChangeHandler = (e) => {
        setBranchId(e.target.value);
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }

    const personalPictureIdChangeHandler = (e) => {
        setPersonalPictureId(e.target.value);
    }

    const expiredLicensePictureIdChangeHandler = (e) => {
        setExpiredLicensePictureId(e.target.value);
    }

    const ezharTaxPictureIdChangeHandler = (e) => {
            setEzharTaxPictureId(e.target.value);
    }

    const ezharTaxPaymentPictureIdChangeHandler = (e) => {
        setEzharTaxPaymentPictureId(e.target.value);
    }

    const taxPictureIdChangeHandler = (e) => {
        setTaxPictureId(e.target.value);
    }

    const taxPaymentPictureIdChangeHandler = (e) => {
        setTaxPaymentPictureId(e.target.value);
    }

    const rentPictureIdChangeHandler = (e) => {
        setRentPictureId(e.target.value);
    }

    const submitHandler = (e) => {
        event.preventDefault();
        console.log(firstName);

        fetch(BASE_URL + "api/v1.0/webservice/home/agencyRenewLicense", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.HPtfpOMB0aP-uaLTEgZJXUYQCFNl_agQFQ5sMP8QaSbvcy4ui_Xbiw.3JmW5tpmpOMAPLLia-b01g.0eA-h7tP8aOtL0o1PvChtWkmKVZpkjgNSpcYIyyk2JHjp6OtLy6MSiqVGI6pASy1nZAhWoQQ7rSosaNEh0WEz4q2DfUw3bxehO7qlan4HW5wNSH-h6-GEXri2L6UMR3fvZavfKxMFtNzTFs4KEQqJCXvAJAW5ovye1IOJE20YniHUreEq6uXyFVMIoKLw9XSlRyGtbCIyL7TjUDdLEL-VA4L8llHojPwXEhS6uKNHTZ_KdmuDxV7Qg-UtjqUdCBrCjeBPsuERa_fy33mCIgNbuy-98-2BjVh26-7CpCCrUWIglJS2OFShfsiOcMdwVG6Pz4bCXfqTDE7LihtmNUlh0nVlu3q1pGHAvTbLOcrZzey0WC2ZPVpdddHZkSzlEbacUh6waS-Ww7nhOSkr9rLoRTy5rV8hQHDfbp8RG2woyq_LxgoIguYKmLkhaADsGVFurXYOJv0MERR2M21yu7W7GZzEE0vwLNi9JI8MkNx4Ls.j3wLNh1Io6Z01t4YMn-VvQ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                nationalCode,
                agentCode,
                phoneNumber,
                branchId,
                description,
                personalPictureId,
                expiredLicensePictureId,
                ezharTaxPictureId,
                ezharTaxPaymentPictureId,
                taxPictureId,
                taxPaymentPictureId,
                rentPictureId,
            }),
        })
            .then((response) => response.json())
            .then(console.log);
    }

    return (
      <Fragment>
          <NextSeo title="تمدید پروانه نمایندگی">

          </NextSeo>
          <PageHeader title="تمدید پروانه نمایندگی" pageTitle="پنل نمایندگی" pageLink="" bg={bgHeader} />
          <section className={styles.renew}>
              <Card>
                  <Title>
                      تمدید فرم نمایندگی
                  </Title>
                  <form method="post" id="myform" onSubmit={submitHandler}>

                      <div className={styles.controls}>
                          <label htmlFor="firstName">
                              نام
                          </label>
                          <input id="firstName" type="text" defaultValue={firstName} onChange={nameChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="lastName">
                              نام خانوادگی
                          </label>
                          <input id="lastName" type="text" defaultValue={lastName} onChange={lastNameChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="nationalCode">
                              کد ملی
                          </label>
                          <input id="nationalCode" type="number" defaultValue={nationalCode} onChange={nationalCodeChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="agentCode">
                              کد نمایندگی
                          </label>
                          <input id="agentCode" type="number" defaultValue={agentCode} onChange={agentCodeChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="phoneNumber">
                              شماره موبایل
                          </label>
                          <input id="phoneNumber" type="number" name={phoneNumber} onChange={phoneNumberChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="branchId">
                              انتخاب شعبه یرپرستی
                          </label>
                          <select name="branchId" onChange={branchIdChangeHandler} id="branchId">
                              <option value="21">اراک</option>
                              <option value="22">اردبیل</option>
                              <option value="25">ارومیه</option>
                              <option value="26">اصفهان</option>
                              <option value="27">اهواز</option>
                              <option value="28">ایلام</option>
                              <option value="29">بجنورد</option>
                              <option value="30">بندرامام خمینی</option>
                              <option value="32">بندرعباس</option>
                              <option value="33">بوشهر</option>
                              <option value="34">بیرجند</option>
                              <option value="35">تبریز</option>
                              <option value="36">تنکابن</option>
                              <option value="37">تهران غرب</option>
                              <option value="38">خرم آباد</option>
                              <option value="39">رشت</option>
                              <option value="40">زاهدان</option>
                              <option value="42">زنجان</option>
                              <option value="43">ساری</option>
                              <option value="44">سمنان</option>
                              <option value="45">سنندج</option>
                              <option value="46">شاهرود</option>
                              <option value="47">شهرکرد</option>
                              <option value="48">شیراز</option>
                              <option value="49">قزوین</option>
                              <option value="50">قم</option>
                              <option value="51">کرج</option>
                              <option value="52">کرمان</option>
                              <option value="53">کرمانشاه</option>
                              <option value="54">گرگان</option>
                              <option value="55">مشهد</option>
                              <option value="56">میرداماد</option>
                              <option value="57">همدان</option>
                              <option value="58">یاسوج</option>
                              <option value="59">یزد</option>
                              <option value="13253">شرق تهران</option>
                              <option value="22884">بابل</option>
                          </select>
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="description">
                              توضیحات
                          </label>
                          <input name="description" id="description" type="text" defaultValue={description} onChange={descriptionChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="personalPictureId">
                              تصویر عکس پرسنلی 3 در 4
                          </label>
                          <input id="personalPictureId" name="personalPictureId" type="file" defaultValue={personalPictureId} onChange={personalPictureIdChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="expiredLicensePictureId">
                              تصویر پروانه منقضی شده
                          </label>
                          <input id="expiredLicensePictureId" name="expiredLicensePictureId" type="file" defaultValue={expiredLicensePictureId} onChange={expiredLicensePictureIdChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="ezharTaxPictureId">
                              تصویر اظهارنامه مالیات ارزش بر افزوده (آخرین دوره)
                          </label>
                          <input id="ezharTaxPictureId" name="ezharTaxPictureId" type="file" defaultValue={ezharTaxPictureId} onChange={ezharTaxPictureIdChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="ezharTaxPaymentPictureId">
                              تصویر فیش واریزی مالیات ارزش بر افزوده (آخرین دوره)
                          </label>
                          <input id="ezharTaxPaymentPictureId" name="ezharTaxPaymentPictureId" type="file" defaultValue={ezharTaxPaymentPictureId} onChange={ezharTaxPaymentPictureIdChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="taxPictureId">
                              تصویر اظهارنامه مالیات بر درآمد(آخرین دوره)
                          </label>
                          <input id="taxPictureId" name="taxPictureId" type="file" defaultValue={taxPictureId} onChange={taxPictureIdChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="taxPaymentPictureId">
                              تصویر فیش واریزی مالیات بر درآمد (آخرین دوره)
                          </label>
                          <input id="taxPaymentPictureId" name="taxPaymentPictureId" type="file" defaultValue={taxPaymentPictureId} onChange={taxPaymentPictureIdChangeHandler} />
                      </div>

                      <div className={styles.controls}>
                          <label htmlFor="rentPictureId">
                              تصویر اجاره نامه دارای اعتبار
                          </label>
                          <input id="rentPictureId" name="rentPictureId" type="file" defaultValue={rentPictureId} onChange={rentPictureIdChangeHandler} />
                      </div>

                      <input type="hidden" value="7" name="agencyRenewLicenseRequest" id="agencyRenewLicenseRequest" />

                      <Button>
                          ارسال درخواست
                      </Button>

                  </form>
              </Card>
          </section>
      </Fragment>
    );
};

export default Renewagentlicense;