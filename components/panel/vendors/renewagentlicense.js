import {Fragment, useEffect, useState} from "react";
import styles from './renewagentlicense.module.css';
import {NextSeo} from "next-seo";
import PageHeader from "../../ui/page-header";
import bgHeader from "../../../public/images/page-header.webp";
import Card from "../../ui/card";
import Title from "../../ui/title";
import Button from "../../ui/button";
import {BASE_URL, BASE_URL_UPLOAD_IMG} from "../../../data/config";
import {error} from "next/dist/build/output/log";

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
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

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

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://bimeharman.faradns.ir/api/v1.0/webservice/home/agencyRenewLicense/", {
                method: "POST",
                headers: {
                    'accept': '*/*',
                    'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.-cdLySvaVds2qj_4S8KOYyLqxvfMLF5v-4pSsKEZr-klMTJl1EUVuQ.zdFQZD9QVh-op7AUikOVvA.xAr7QhJobnPb8-boAzAVL-U1zgDEwuBLMqmK9HWYTRzU3n5St2OQddq4YQknz7DiEqRCKSHCLj77_kV7rvwLsdUi4ypOJr3WOtMGn0VG3dL_QsCcN5X1kdZOQhU92qCQB_q1dffYkNDDBoYLoVkYfi_j8K7TwTl7_PIAvUR76Ci4o4INmhe8Q0EQ2EQrUlKXo7BHxZhi94u1nmQAPPEW60czpm9abTGZ1chTQOPoSZ7ooMO8nIssDL2citxmcTT9vIWN1fszg4M_FAhipFJM1xlMP4A5v-vBqr-CfFiIi1uD8aeWbXfwNcRJuuSLkg4TrIumkgE3OX7mcIY0UI9UueD5VUzbqPYSSMl2YyFRjOYuzlVxVqk6oXwXMXOli3PU-U00J3gFyExyXec5WACv8jqcT368BmQkI9irQi_f1K1u26WsyRN6JlPY3OPyKLDvPnvnQk04BC_Ffub13L5u8_94Z_vYhb3_Ff_qlTVK_P4.sod2HUIbj_qEWIpLBrUjyg',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'firstName': 'string',
                    'lastName': 'string',
                    'nationalCode': 'string',
                    'agentCode': 'string',
                    'phoneNumber': 'string',
                    'branchId': 90,
                    'description': 'string',
                    'personalPictureId': 90,
                    'expiredLicensePictureId': 90,
                    'ezharTaxPictureId': 90,
                    'ezharTaxPaymentPictureId': 90,
                    'taxPictureId': 90,
                    'taxPaymentPictureId': 90,
                    'rentPictureId': 90
                })
            });
            let resJson = await res.json();
            if (res.status === 200) {
               console.log('data was sent successfully: ' + res);
            } else {
                console.log("Some error occured: " + resJson);
            }
        } catch (err) {
            console.log("Some error: ");
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        console.log("test begin")
        fetch('https://bimeharman.faradns.ir/api/v1.0/webservice/home/agencyRenewLicense/', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.-cdLySvaVds2qj_4S8KOYyLqxvfMLF5v-4pSsKEZr-klMTJl1EUVuQ.zdFQZD9QVh-op7AUikOVvA.xAr7QhJobnPb8-boAzAVL-U1zgDEwuBLMqmK9HWYTRzU3n5St2OQddq4YQknz7DiEqRCKSHCLj77_kV7rvwLsdUi4ypOJr3WOtMGn0VG3dL_QsCcN5X1kdZOQhU92qCQB_q1dffYkNDDBoYLoVkYfi_j8K7TwTl7_PIAvUR76Ci4o4INmhe8Q0EQ2EQrUlKXo7BHxZhi94u1nmQAPPEW60czpm9abTGZ1chTQOPoSZ7ooMO8nIssDL2citxmcTT9vIWN1fszg4M_FAhipFJM1xlMP4A5v-vBqr-CfFiIi1uD8aeWbXfwNcRJuuSLkg4TrIumkgE3OX7mcIY0UI9UueD5VUzbqPYSSMl2YyFRjOYuzlVxVqk6oXwXMXOli3PU-U00J3gFyExyXec5WACv8jqcT368BmQkI9irQi_f1K1u26WsyRN6JlPY3OPyKLDvPnvnQk04BC_Ffub13L5u8_94Z_vYhb3_Ff_qlTVK_P4.sod2HUIbj_qEWIpLBrUjyg',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'firstName': 'string',
                'lastName': 'string',
                'nationalCode': 'string',
                'agentCode': 'string',
                'phoneNumber': 'string',
                'branchId': 90,
                'description': 'string',
                'personalPictureId': 90,
                'expiredLicensePictureId': 90,
                'ezharTaxPictureId': 90,
                'ezharTaxPaymentPictureId': 90,
                'taxPictureId': 90,
                'taxPaymentPictureId': 90,
                'rentPictureId': 90
            })
        }).then(response => {
            if (response === 200) {
                throw new Error('???????????? ???????? ?????? ???????? ??????!');
            } else if (response !== 200) {
                throw new Error('???? ???????????? ?????????? ????')
            }
            setSuccess(success.message);
            return response.json();
        })
            .then((response) => response.json())
            .then(console.log).catch((error) => {
            setError(error.message);
        });

        console.log("test end")

    }

    return (
        <Fragment>
            <NextSeo title="?????????? ???????????? ????????????????">

            </NextSeo>
            <PageHeader title="?????????? ???????????? ????????????????" pageTitle="?????? ????????????????" pageLink="" bg={bgHeader}/>
            <section className={styles.renew}>
                <Card>
                    <Title>
                        ?????????? ?????? ????????????????
                    </Title>
                    <form method="post" id="myform" onSubmit={submitHandler}>
                        <div className={styles.controls}>
                            <label htmlFor="firstName">
                                ??????
                            </label>
                            <input id="firstName" type="text" defaultValue={firstName} onChange={nameChangeHandler} />
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="lastName">
                                ?????? ????????????????
                            </label>
                            <input id="lastName" type="text" defaultValue={lastName} onChange={lastNameChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="nationalCode">
                                ???? ??????
                            </label>
                            <input id="nationalCode" type="number" defaultValue={nationalCode}
                                   onChange={nationalCodeChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="agentCode">
                                ???? ????????????????
                            </label>
                            <input id="agentCode" type="number" defaultValue={agentCode}
                                   onChange={agentCodeChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="phoneNumber">
                                ?????????? ????????????
                            </label>
                            <input id="phoneNumber" type="number" name={phoneNumber}
                                   onChange={phoneNumberChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="branchId">
                                ???????????? ???????? ??????????????
                            </label>
                            <select name="branchId" onChange={branchIdChangeHandler} id="branchId">
                                <option value="21">????????</option>
                                <option value="22">????????????</option>
                                <option value="25">????????????</option>
                                <option value="26">????????????</option>
                                <option value="27">??????????</option>
                                <option value="28">??????????</option>
                                <option value="29">????????????</option>
                                <option value="30">???????????????? ??????????</option>
                                <option value="32">????????????????</option>
                                <option value="33">??????????</option>
                                <option value="34">????????????</option>
                                <option value="35">??????????</option>
                                <option value="36">????????????</option>
                                <option value="37">?????????? ??????</option>
                                <option value="38">?????? ????????</option>
                                <option value="39">??????</option>
                                <option value="40">????????????</option>
                                <option value="42">??????????</option>
                                <option value="43">????????</option>
                                <option value="44">??????????</option>
                                <option value="45">??????????</option>
                                <option value="46">????????????</option>
                                <option value="47">????????????</option>
                                <option value="48">??????????</option>
                                <option value="49">??????????</option>
                                <option value="50">????</option>
                                <option value="51">??????</option>
                                <option value="52">??????????</option>
                                <option value="53">????????????????</option>
                                <option value="54">??????????</option>
                                <option value="55">????????</option>
                                <option value="56">????????????????</option>
                                <option value="57">??????????</option>
                                <option value="58">??????????</option>
                                <option value="59">??????</option>
                                <option value="13253">?????? ??????????</option>
                                <option value="22884">????????</option>
                            </select>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="description">
                                ??????????????
                            </label>
                            <input name="description" id="description" type="text" defaultValue={description}
                                   onChange={descriptionChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="personalPictureId">
                                ?????????? ?????? ???????????? 3 ???? 4
                            </label>
                            <input id="personalPictureId" name="personalPictureId" type="file"
                                   defaultValue={personalPictureId} onChange={personalPictureIdChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="expiredLicensePictureId">
                                ?????????? ???????????? ?????????? ??????
                            </label>
                            <input id="expiredLicensePictureId" name="expiredLicensePictureId" type="file"
                                   defaultValue={expiredLicensePictureId}
                                   onChange={expiredLicensePictureIdChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="ezharTaxPictureId">
                                ?????????? ?????????????????? ???????????? ???????? ???? ???????????? (?????????? ????????)
                            </label>
                            <input id="ezharTaxPictureId" name="ezharTaxPictureId" type="file"
                                   defaultValue={ezharTaxPictureId} onChange={ezharTaxPictureIdChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="ezharTaxPaymentPictureId">
                                ?????????? ?????? ???????????? ???????????? ???????? ???? ???????????? (?????????? ????????)
                            </label>
                            <input id="ezharTaxPaymentPictureId" name="ezharTaxPaymentPictureId" type="file"
                                   defaultValue={ezharTaxPaymentPictureId}
                                   onChange={ezharTaxPaymentPictureIdChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="taxPictureId">
                                ?????????? ?????????????????? ???????????? ???? ??????????(?????????? ????????)
                            </label>
                            <input id="taxPictureId" name="taxPictureId" type="file" defaultValue={taxPictureId}
                                   onChange={taxPictureIdChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="taxPaymentPictureId">
                                ?????????? ?????? ???????????? ???????????? ???? ?????????? (?????????? ????????)
                            </label>
                            <input id="taxPaymentPictureId" name="taxPaymentPictureId" type="file"
                                   defaultValue={taxPaymentPictureId} onChange={taxPaymentPictureIdChangeHandler}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="rentPictureId">
                                ?????????? ?????????? ???????? ?????????? ????????????
                            </label>
                            <input id="rentPictureId" name="rentPictureId" type="file" defaultValue={rentPictureId}
                                   onChange={rentPictureIdChangeHandler}/>
                        </div>

                        <Button>
                            ?????????? ??????????????
                        </Button>

                        {error && <p className="success_webservice">{error}</p>}
                        {success && <p>{success}</p>}

                    </form>
                </Card>
            </section>
        </Fragment>
    );
};

export default Renewagentlicense;