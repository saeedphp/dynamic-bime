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

    const [validate, setValidate] = useState(false);

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/security/users/authenticated", {
            headers: {
                'cultureLcid': 1065,
                'Authorization': `Bearer ${token}`
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
                console.log(userInfo);
                // this.setState({ totalReactPackages: data.total })
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

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
                 //console.log(data);
                cookies.set('token', data.accessToken.token, { path: '/' });
                //console.log(cookies.get('token'));
                //router.push("/");
                window.location.href = '/'
                /*if (userInfo.accessLevel === "Personnel"){
                    router.push("/panel/personel");
                }else if (userInfo.accessLevel === "Representative"){
                    router.push("/panel/vendors");
                } else if (userInfo.accessLevel === "SuperAdmin"){
                    router.push("/panel/personel");
                }*/
            })
            .catch(error => {
                setValidate(!validate);
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an errorrrr!', error);
            });
    };

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
                        {validate ? (
                            <p className="login_error">
                                نام کاربری یا رمز عبور اشتباه می باشد!
                            </p>
                        ) : null}
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