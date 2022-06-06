import React, {Fragment, useEffect, useState} from "react";
import PageHeader from "../../components/ui/page-header";
import BlogImage from "../../components/blog-detail/blog-image";
import {useRouter} from "next/router";
import {getAllEvents, getEventById} from "../../data/blog";
import Title from "../../components/ui/title";
import BlogMeta from "../../components/blog-detail/blog-meta";
import BlogContent from "../../components/blog-detail/blog-content";
import Sidebar from "../../components/blog/sidebar";
import CommentForm from "../../components/icons/comment-form";
import Button from "../../components/ui/button";
import RelatedBlog from "../../components/icons/related-blog";
import BlogItem from "../../components/home-page/blog/blog-item";
import bgHeader from "../../public/images/page-header.webp";
import {BASE_URL} from "../../data/config";
import {NextSeo} from "next-seo";

const BlogDetailPage = () => {

    const submitHandler = (event) =>{
        event.preventDefault();
    };

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

    const router = useRouter();
    const { blogId } = router.query;
    let currBlog;
    for (let blog of posts) {
        if (blog.id == blogId) currBlog = blog;
    }
    if (currBlog != undefined)
        return (
            <Fragment>
                <NextSeo title={currBlog.title}>

                </NextSeo>
                <PageHeader title={currBlog.title} pageTitle="بلاگ" pageLink="/blog" bg={bgHeader}/>
                <section className="blog-detail">
                    <Sidebar/>
                    <div className="blog-detail_main">
                        <BlogImage
                            title={currBlog.title}
                            picture={currBlog.picture}
                        />
                        <BlogMeta
                            blogCategories={currBlog.blogCategories}
                            insertTime={currBlog.insertTime}
                        />
                        <BlogContent
                            title={currBlog.title}
                            body={currBlog.body}
                        />
                        <div className="blog-detail__form">
                            <div className="title">
                                <CommentForm/>
                                <p>
                                    ارسال دیدگاه
                                </p>
                            </div>
                            <form>
                                <div id="id-info">

                                    <div className="controls">
                                        <label htmlFor="name">
                                            نام
                                        </label>
                                        <input id="name" name="name" type="text"/>
                                    </div>

                                    <div className="controls">
                                        <label htmlFor="family">
                                            خانوادگی
                                        </label>
                                        <input id="family" name="family" type="text"/>
                                    </div>

                                </div>

                                <div className="controls">
                                    <label htmlFor="comment">
                                        نظر خود را بنویسید ...
                                    </label>
                                    <textarea id="comment" name="comment">

                                </textarea>
                                </div>

                                <Button onClick={submitHandler}>
                                    ارسال پیام
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
                <div id="related-posts">
                    <div className="blog-detail__related">
                        <div className="title">
                            <RelatedBlog/>
                            <p>
                                مطالب مرتبط
                            </p>
                        </div>
                    </div>
                    <div className="posts-related">
                        {posts.slice(0,4).map((post) => (
                            <BlogItem
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                picture={post.picture}
                                insertTime={post.insertTime}
                                blogCategories={post.blogCategories}
                            />
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    else
        return (
            <Title>
                هیچ مقاله ای یافت نشد!
            </Title>
        )
};

export default BlogDetailPage;