import React, {Fragment, useEffect, useState} from 'react';
import styles from "./blog-items.module.css";
import BlogItem from "../home-page/blog/blog-item";
import {getAllEvents} from "../../data/blog";
import Pagination from "./pagination";
import Image from "next/image";
import search from "../../public/images/search.png";
import {BASE_URL} from "../../data/config";

const BlogItems = () => {

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

    const allBlogs = getAllEvents();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = () => {
        if (currentPage === 3){
            return null;
        }
        setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        if (currentPage === 1){
            return null;
        }
        setCurrentPage(currentPage - 1)
    }

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    const blogs = getAllEvents();

    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(postsCat.map((b) => b.name)));

    return (
        <Fragment>
            <div className={styles.card}>
                <div className={styles.filter}>
                    <div className={styles.category}>
                        <ul className="categories">
                            <li className={category === "all" ? 'active' : null} onClick={() => setCategory("all")}>
                                همه
                            </li>
                            {categories.slice(0,4).map((c, i) => {
                                return (
                                    <li className={category === c ? 'active' : ''} key={i} onClick={() => setCategory(c)}>
                                        {c}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.search}>
                        <span>
                            <Image src={search} alt="search" layout={"fill"} />
                        </span>
                        <input type="text" placeholder="جستجو مقالات" value={inputText} onChange={onChange} />
                    </div>
                </div>
                <div className={styles.main}>
                    {currentPosts.filter((item) => {
                        return (
                            item.title.includes(inputText)
                        )
                    })
                        .map((allBlog, i) => {
                            if (category == "all")
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
                                );
                            else if (category === allBlog.blogCategories)
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
                        })}
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                />
            </div>
        </Fragment>
    );
};

export default BlogItems;