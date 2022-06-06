import styles from "./blog-item.module.css";
import Link from "next/link";
import Image from "next/image";
import Calendar from "../../icons/calendar";
import Button from "../../ui/button";
import React from "react";
import img from '../../../public/images/404.jpg';
import {BASE_URL} from "../../../data/config";

const BlogItem = (props) => {
    
    const {id, title, body, insertTime, picture, blogCategories} = props;
    const humanReadableTime = new Date(insertTime).toLocaleDateString('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    
    return (

        <div className={styles.items}>
            <div className={styles.imageWrapper}>
                <a className={styles.category}>
                    {blogCategories.map((item, i) => (
                        <p key={i}>
                            {item.name}
                        </p>
                    ))}
                </a>
                <Link href={`/blog/${id}`}>
                    <Image src={BASE_URL + picture.url} alt={title} layout={"fill"} />
                </Link>

            </div>
            <Link href={`/blog/${id}`}>
                <a>
                    {title}
                </a>
            </Link>
            <p>
                {body}
            </p>
            <div className={styles.controls}>
                <time>
                    <Calendar />
                    {humanReadableTime}
                </time>
                <Button link={`/blog/${id}`}>
                    بیشتر بخوانید
                </Button>
            </div>
        </div>
        
    );
};

export default BlogItem;