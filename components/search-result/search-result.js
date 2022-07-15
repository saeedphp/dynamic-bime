import {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import searchActions from "../../redux/actions/search";
import Title from "../ui/title";
import Card from "../ui/card";
import Link from "next/link";
import styles from './search-result.module.css';
import Image from "next/image";
import SpecialInsurance from "../icons/insurance/special-insurance";
import BlogIcon from "../icons/blog-icon";
import { useRouter } from "next/router";

const SearchResult = ({insurances, blogPosts, generatedUrl, search}) => {
    console.log(insurances);
    const [locationSearch, setLocationSearch] = useState('');
    const router = useRouter();
   
    useEffect(() => {
        if (generatedUrl.length !== 0) {
            if( generatedUrl !== location.search){
                router.push('/search' + generatedUrl, undefined, {shallow: true})
                setLocationSearch(generatedUrl)
            }
            else{
                router.push('/search' + generatedUrl, undefined, {shallow: true})
            }
            
        }else{
            search({}, {}, location.search)
        }
         console.log('generetedUrl',generatedUrl);
        console.log('locationSearch',locationSearch)

    }, [generatedUrl])
    useEffect(() => {
        // setLocationSearch(location.search)
       
    }, [])
    useEffect(() => {

       
            
        

    }, [])
    return (
        <Fragment>
            <section className={styles.search}>
                <ul className={styles.list}>
                    <Title>
                        <p>
                            محصولات
                        </p>
                    </Title>
                    {
                        insurances.length > 0 ? (
                                insurances.map((item) => (
                                    <Card className={styles.items} key={item.id}>
                                        <Link href={`/product/${item.id}`}>
                                            <a className={styles.title}>
                                                <SpecialInsurance />
                                                {item.title}
                                            </a>
                                        </Link>
                                        <p>
                                            {item.description}
                                        </p>
                                    </Card>
                                ))
                            ) :
                            (
                                <Card className={styles.items}>
                                    <p>
                                        موردی یافت نشد!
                                    </p>
                                </Card>
                            )
                    }
                    <hr/>
                    <Title>
                        <p>
                            اخبار و مقالات
                        </p>
                    </Title>


                    {
                        blogPosts.length > 0 ?
                            (
                                blogPosts.map((item) => (
                                    <Card className={styles.items} key={item.id}>
                                        <Link href={`blog/${item.id}`}>
                                            <a className={styles.title}>
                                                <BlogIcon />
                                                {item.title}</a>
                                        </Link>
                                        <p dangerouslySetInnerHTML={{__html: item.body.slice(0, 30, '...')}}>
                                        </p>
                                    </Card>
                                ))
                            ) : (<Card className={styles.items}>
                                <p>
                                    موردی یافت نشد!
                                </p>
                            </Card>)
                    }
                </ul>
            </section>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    insurances: state.searchState.searchResults.insurances,
    blogPosts: state.searchState.searchResults.blogPosts,
    generatedUrl: state.searchState.generatedUrl
})

const mapDispatchToProps = {
    search: searchActions.getSearchResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);