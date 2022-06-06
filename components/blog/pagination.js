import styles from './pagination.module.css';
import PrevPage from "../icons/prev-page";
import NextPage from "../icons/next-page";

const Pagination = ({postsPerPage, totalPosts, paginate, nextPage, prevPage, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={`paginate ${styles.pagination}`}>
            <ul>
                <span>
                    <PrevPage onClick={prevPage} />
                </span>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a className={currentPage === number ? 'active' : null} onClick={() => {paginate(number)}}>
                            {number}
                        </a>
                    </li>
                ))}
                <span>
                    <NextPage onClick={nextPage} />
                </span>
            </ul>
        </nav>
    );
};

export default Pagination;