import {searchActions} from "../../redux/actions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import { Router } from "next/router";

const Search = ({search, generatedUrl}) => {
    const [val, setVal]  = useState('');
    const [changeRoute, setChangeRoute] = useState(false);
    const [pathName, setPathName] = useState('');
    useEffect(() => {
        setPathName(location.pathname)
    }, [])
    useEffect(() => {
        if(changeRoute == true ){
            if(!location.href.includes('search')){
            window.location.href = location.href + '/search?' + generatedUrl 
            }
        }
    }, [changeRoute])
    return (
      <>
          <form>
              <input type="text" value={val} onChange={e => setVal(e.target.value)} id="search" placeholder="جستجو…" name="search" />
              <button onClick={e => {
                  e.preventDefault()
                   if(val.length > 3)   {
                          search({}, {
                      cultureLcid: 1065,
                          pageIndex: 0,
                          pageSize: 10,
                          title: val,
                      })    }
                      if(generatedUrl.length !== 0){
                        setChangeRoute(true)
                      }
             
              } 
              
              }>
                  submit
              </button>
          </form>
      </>
    );
};

const mapStateToProps = state => ({
    generatedUrl: state.searchState.generatedUrl,
});
const mapDispatchToProps = {
    search: searchActions.getSearchResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);