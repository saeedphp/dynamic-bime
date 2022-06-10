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
import styles from "../../components/contactus/contact-form.module.css";

const BlogDetailPage = () => {

    const [category, setCategory] = useState("all");

    const [postsCat, setPostsCat] = useState([]);
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

    const submitHandler = (event) =>{
        event.preventDefault();
    };

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/blogpost/active", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                setPosts(data.result);
                console.log(setPosts);

            })

            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        fetch(BASE_URL + "api/v1.0/cms/blogComment/active?pageIndex=0&pageSize=100" , {
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

                setComments(data.result);
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
    let currComment;
    for (let blog of posts) {
        if (blog.id == blogId) currBlog = blog;
    }
    for (let commentId of comments) {
        if (commentId.blogPostId == blogId) currComment = commentId;
    }

    const initialValues = {firstName: "", lastName: "", comment: "", cultureLcid: 1065, isActive: true, ordering: 1, blogPostId: blogId,}
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setErrorForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const post = {firstName, lastName, comment};
        console.log(formValues);
        fetch(BASE_URL + "api/v1.0/cms/blogComment", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'content-type': 'application/json'
            },
            body: JSON.stringify(formValues)
        }).then(() => {
            console.log('new post');
            setErrorForm(validateForm(formValues));
            setIsSubmit(true);
        })

    }

    const validateForm = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'نام الزامی است!';
        }
        if (!values.lastName) {
            errors.lastName = 'نام خانوادگی الزامی است!';
        }
        if (!values.comment) {
            errors.comment = 'پیام الزامی است!';
        }
        return errors
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
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
                            <form method="post" id="myform" onSubmit={submitForm}>
                                {Object.keys(formError).length === 0 && isSubmit ? (
                                    <div><p>با موفقیت ارسال شد</p></div>
                                ) : ''}
                                <div id="id-info">

                                    <div className="controls">
                                        <label htmlFor="firstName">
                                            نام
                                        </label>
                                        <input id="firstName" name="firstName" type="text" value={formValues.firstName} onChange={handleChange}/>
                                        <p>
                                            {formError.firstName}
                                        </p>
                                    </div>

                                    <div className="controls">
                                        <label htmlFor="lastName">
                                            خانوادگی
                                        </label>
                                        <input id="lastName" name="lastName" type="text" value={formValues.lastName} onChange={handleChange}/>
                                        <p>
                                            {formError.lastName}
                                        </p>
                                    </div>

                                </div>

                                <div className="controls">
                                    <label htmlFor="comment">
                                        نظر خود را بنویسید ...
                                    </label>
                                    <textarea id="comment" name="comment" value={formValues.comment} onChange={handleChange}>

                                </textarea>
                                    <p>
                                        {formError.comment}
                                    </p>
                                </div>

                                <input type="hidden" id="blogPostId" name="blogPostId" value={currBlog.id} />
                                <input type="hidden" id="isActive" name="isActive" value="1" />
                                <input type="hidden" id="cultureLcid" name="cultureLcid" value="1065" />
                                <input type="hidden" id="ordering" name="ordering" value="1" />

                                <Button onClick={submitHandler}>
                                    ارسال پیام
                                </Button>
                            </form>

                            <div id="comments">
                                <ul>
                                    {comments.filter((item, i) => (
                                        item.blogPostId == currBlog.id
                                    ))
                                        .map((comment, i) => {
                                        if (comment.confirmedByAdmin == true) {
                                        return (
                                            <li key={i}>
                                                <p>
                                                    {comment.comment}
                                                </p>
                                                <date>
                                                    {new Date(comment.insertDateTime).toLocaleDateString('fa-IR',{
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </date>
                                            </li>
                                        )
                                        }
                                    })}
                                </ul>
                            </div>



                        </div>
                    </div>
                </section>
                <div id="related-posts">
                    <div className="blog-detail__related">
                        <div className="title">
                            <RelatedBlog/>
                        </div>
                    </div>
                    <div className="posts-related">
                        {posts.slice(0,4).map((post) => {
                            return (
                                <BlogItem
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                    picture={post.picture}
                                    insertTime={post.insertTime}
                                    blogCategories={post.blogCategories}
                                />
                            )
                        })}
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