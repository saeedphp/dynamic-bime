import Calendar from "../icons/calendar";
import Category from "../icons/category";
import {Fragment} from "react";
import styles from './blog-meta.module.css';

const BlogMeta = (props) => {

    const {insertTime, blogCategories} = props;
    const humanReadableTime = new Date(insertTime).toLocaleDateString('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <Fragment>
            <div className={styles.card}>
                <time>
                    <Calendar/>
                    تاریخ انتشار :
                    {humanReadableTime}
                </time>
                <p className={styles.meta}>
                    <Category/>
                    دسته بندی :
                    {blogCategories.name}
                </p>
            </div>
        </Fragment>
    )
};

export default BlogMeta;