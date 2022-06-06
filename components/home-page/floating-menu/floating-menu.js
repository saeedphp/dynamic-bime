import {Fragment, useState, useEffect} from "react";
import styles from './floating-menu.module.css';
import {getFloatingMenu} from "../../../data/floating-menu";
import axios from 'axios';

const FloatingMenu = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
       async function fetchBlogPosts() {
           const response = await axios.get(
               "https://jsonplaceholder.typicode.com/users"
           );
           setPosts(response.data)
       }
       fetchBlogPosts();
    }, []);
    console.log(posts);

    const menuItems = getFloatingMenu();

    return (
        <Fragment>
            <div className={styles.menu}>
                <ul>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <a href={menuItem.link}>
                                {menuItem.icon}
                                <span>
                                    {menuItem.title}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

/*export async function getStaticProps() {
    let blogPosts;
    try {
        const res = await axios.get('https://blog.faramouj.com/wp-json/wp/v2/posts?per_page=3');
        blogPosts = JSON.stringify(res.data);
    }
    catch {
        blogPosts = [];
    }

    return {
        props: {
            blogPosts: blogPosts
        }
    }
}*/

export default FloatingMenu;