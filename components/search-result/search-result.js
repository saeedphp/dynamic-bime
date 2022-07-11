import {Fragment, useEffect} from "react";
import { connect } from "react-redux";
import searchActions from "../../redux/actions/search";

const SearchResult = ({insurances, blogPosts, generatedUrl, search}) => {
        console.log(insurances)
        useEffect(() => {
            if(generatedUrl.length !== 0 && '?' +generatedUrl !== location.search){
                location.search = generatedUrl
            }
            console.log(location)
            
        }, [generatedUrl])
        useEffect(() => {
            
                search({}, {}, location.search)
            
        }, [])
    return (
        <Fragment>
            <ul>
               {
                insurances.map((item) => (
                    <div>INSURANCE {item.id}</div>
                ))
               }
               <hr />
               {
                blogPosts.map((item) => (
                    <div>BLOG POST {item.id}</div>
                ))
               }
            </ul>
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