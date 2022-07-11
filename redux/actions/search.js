import _dataManager from "../dataManager";
import {ApiConfig} from "../constants";

const searchActions = {
    getSearchResults: (data = {}, param = {}) => async dispatch => {
        try{
            let res =  fetch(ApiConfig.baseUrl + '/cms/common/Search?' + new URLSearchParams(param));
            if(res){
                dispatch({type: 'cms/common/Search', payload: res})
            }
        }catch(e){
        console.error((e))
        }
    }
}

export default searchActions;