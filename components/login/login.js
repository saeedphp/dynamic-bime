import {Fragment, useState} from "react";
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
                console.log(cookies.get('token'));
                router.push("/panel/personel")
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
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