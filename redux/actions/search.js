import _dataManager from "../dataManager";
import {ApiConfig} from "../constants";
import axios from "axios";

const searchActions = {
    getSearchResults: (data = {}, param = {}, searchUrl = '') => async dispatch => {
        try {
            let res = await axios.get(ApiConfig.baseUrl + '/cms/common/Search' + searchUrl, {params: param, headers: {cultureLcid: 1065}});
            console.log(res)
            if(res){
                dispatch({type: 'cms/common/Search', payload: {
                    result: res.data.result,
                    url: res.request.responseURL,
                }});
                
            }
        } catch (error) {
            console.error(error)
        }
        },
        

}

export default searchActions;