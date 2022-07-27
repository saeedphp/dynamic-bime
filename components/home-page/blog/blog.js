import React, {useEffect, useState} from 'react';
import styles from './blog.module.css';
import Link from "next/link";
import Image from "next/image";
import BlogItem from "./blog-item";
import {BASE_URL} from "../../../data/config";
import Button from "../../ui/button";

const Blog = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }

    const [posts, setPosts] = useState([]);
    const [postsCat, setPostsCat] = useState([]);

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

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/blogcategory/list/active", {
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

                setPostsCat(data.result);
                console.log(setPosts);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);

    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(postsCat.map((b) => b.name)));

    return (
        <section className={styles.blog}>

            <div className={styles['row-info']}>
                <h2 className={styles.title}>
                    اخبار و رویداد ها
                </h2>
                <ul className="categories">
                    <li className={category === "all" ? 'active' : null} onClick={() => setCategory("all")}>
                        همه
                    </li>
                    {categories.slice(0,2).map((c, i) => {
                        return (
                            <li className={category === c ? 'active' : ''} key={i} onClick={() => setCategory(c)}>
                                {c}
                            </li>
                        )
                    })}
                </ul>

            </div>

            <div className={toggle === 1 ? styles['blog-posts__active'] : styles['blog-posts']}>
                {posts.slice(0,4).map((allBlog, i) => {

                        for (let i in allBlog.blogCategories){
                            for (let j in allBlog.blogCategories[i]){
                                let x = allBlog.blogCategories[i][j];
                                if (x == category){
                                    return (
                                        <BlogItem
                                            key={allBlog.id}
                                            id={allBlog.id}
                                            title={allBlog.title}
                                            body={allBlog.body}
                                            picture={allBlog.picture}
                                            insertTime={allBlog.insertTime}
                                            blogCategories={allBlog.blogCategories}
                                        />
                                    )
                                }else if (category == "all") {
                                    return (
                                        <BlogItem
                                            key={allBlog.id}
                                            id={allBlog.id}
                                            title={allBlog.title}
                                            body={allBlog.body}
                                            picture={allBlog.picture}
                                            insertTime={allBlog.insertTime}
                                            blogCategories={allBlog.blogCategories}
                                        />
                                    )
                                }
                            }
                        }

                })}
            </div>

            <Button link="/blog">
                مشاهده همه مقالات
            </Button>

        </section>
    )
};

export default Blog;