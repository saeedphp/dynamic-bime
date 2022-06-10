import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import Calendar from "../icons/calendar";
import {getAllEvents} from "../../data/blog";
import {useEffect, useState} from "react";
import {BASE_URL} from "../../data/config";

const Sidebar = () => {

    const sidebarBlogs = getAllEvents();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/blogpost/active", {
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

                setPosts(data.result);
                console.log(setPosts);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);


    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    آخرین اخبار
                </h2>
                <ul>
                    {posts.slice(0,3).reverse().map((sidebarBlog) => (
                        <li key={sidebarBlog.id} className={styles.items}>
                            <div className={styles['post-wrapper']}>
                                <div className={styles.image}>
                                    <Image src={BASE_URL + sidebarBlog.picture.url} alt={sidebarBlog.title} layout={"fill"} />
                                </div>
                                <div className={styles.info}>
                                    <Link href={`blog/${sidebarBlog.id}`}>
                                        <a className={styles.title}>
                                            {sidebarBlog.title}
                                        </a>
                                    </Link>
                                    <time>
                                        <Calendar/>
                                        {new Date(sidebarBlog.insertTime).toLocaleDateString('fa-IR',{
                                          day: 'numeric',
                                          month: 'long',
                                          year: 'numeric',
                                        })}
                                    </time>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    پر بازدیدترین اخبار
                </h2>
                <ul>
                    {posts.slice(0,3).map((sidebarBlog) => (
                        <li key={sidebarBlog.id} className={styles.items}>
                            <div className={styles['post-wrapper']}>
                                <div className={styles.image}>
                                    <Image src={BASE_URL + sidebarBlog.picture.url} alt={sidebarBlog.title} layout={"fill"} />
                                </div>
                                <div className={styles.info}>
                                    <Link href={`blog/${sidebarBlog.id}`}>
                                        <a className={styles.title}>
                                            {sidebarBlog.title}
                                        </a>
                                    </Link>
                                    <time>
                                        <Calendar/>
                                        {new Date(sidebarBlog.insertTime).toLocaleDateString('fa-IR',{
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </time>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;