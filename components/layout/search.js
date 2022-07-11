import {searchActions} from "../../redux/actions";
import {connect} from "react-redux";
import {useState} from "react";

const Search = ({search}) => {
    const [val, setVal]  = useState('')
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
             
              } }>
                  submit
              </button>
          </form>
      </>
    );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    search: searchActions.getSearchResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);