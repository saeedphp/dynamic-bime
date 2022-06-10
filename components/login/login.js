import {Fragment, useState,useEffect} from "react";
import styles from './login.module.css';
import {NextSeo} from "next-seo";
import PageHeader from "../ui/page-header";
import imgPath from "../../public/images/page-header.webp";
import Card from "../ui/card";
import Eye from "../icons/eye";
import Button from "../ui/button";
import Cookies from 'universal-cookie';
import {BASE_URL} from "../../data/config";
import {useRouter} from "next/router";

const Login = () => {

    const cookies = new Cookies();
    const token = cookies.get('token');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const [shown, setShown] = useState(false);

    const togglePassVisibility = () => {
        setShown(shown ? false : true);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(username, password)

        await fetch(BASE_URL + 'api/auth/signin?api-version=1.0', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(async response => {
                const data = await response.json();

                // setRecord(data.result);
                // console.log(data);
                cookies.set('token', data.accessToken.token, { path: '/' });
                //console.log(cookies.get('token'));
                router.push("/panel/personel");

            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    };

    /*const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/security/users/authenticated", {
            headers: {
                'accept': '*!/!*',
                'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.HPtfpOMB0aP-uaLTEgZJXUYQCFNl_agQFQ5sMP8QaSbvcy4ui_Xbiw.3JmW5tpmpOMAPLLia-b01g.0eA-h7tP8aOtL0o1PvChtWkmKVZpkjgNSpcYIyyk2JHjp6OtLy6MSiqVGI6pASy1nZAhWoQQ7rSosaNEh0WEz4q2DfUw3bxehO7qlan4HW5wNSH-h6-GEXri2L6UMR3fvZavfKxMFtNzTFs4KEQqJCXvAJAW5ovye1IOJE20YniHUreEq6uXyFVMIoKLw9XSlRyGtbCIyL7TjUDdLEL-VA4L8llHojPwXEhS6uKNHTZ_KdmuDxV7Qg-UtjqUdCBrCjeBPsuERa_fy33mCIgNbuy-98-2BjVh26-7CpCCrUWIglJS2OFShfsiOcMdwVG6Pz4bCXfqTDE7LihtmNUlh0nVlu3q1pGHAvTbLOcrZzey0WC2ZPVpdddHZkSzlEbacUh6waS-Ww7nhOSkr9rLoRTy5rV8hQHDfbp8RG2woyq_LxgoIguYKmLkhaADsGVFurXYOJv0MERR2M21yu7W7GZzEE0vwLNi9JI8MkNx4Ls.j3wLNh1Io6Z01t4YMn-VvQ'
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

                setUserInfo(data.result);
                console.log('user info: ' + setUserInfo);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);*/

    return (
        <Fragment>
            <NextSeo title="ورود">

            </NextSeo>
            <section className={styles.login}>
                <Card className={styles.card}>
                    <h2 className={styles.title}>
                        فرم ورود
                    </h2>
                    <form onSubmit={submitHandler}>

                        <div className={styles.controls}>
                            <label htmlFor="username">
                                نام کاربری
                            </label>
                            <input id="username" name="username" type="text" onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="password">
                                رمز عبور
                            </label>
                            <input id="password" name="password" type={shown ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}/>
                            <Eye onClick={togglePassVisibility}/>
                        </div>

                        <div>
                            <Button>
                                ورود
                            </Button>
                        </div>

                    </form>
                </Card>
            </section>
        </Fragment>
    )
};

export default Login;