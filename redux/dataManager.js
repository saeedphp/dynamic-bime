import { ApiConfig } from "./constants";
import axios from "axios";
// import window from 'global/window'

let { baseUrl } = ApiConfig;
baseUrl = baseUrl + "/";

const Axios = axios.create({
  withCredentials: true,
  validateStatus: null,
  baseURL: baseUrl,
  // headers: access ? { Authorization: `Bearer ${access}` } : {},
});
class DataManager {
  
  get = async (url, params, opt, data) => 
    
    await this.check(
      url,
      opt,
      async () => await Axios.get(url, { params, ...opt }),
      data || params
    );

  
  post = async (url, params, opt, data ) =>
    await this.check(
      url,
      opt,
      async () => await Axios.post(url, params, opt),
      data || params
    );
  put = async (url , params , opt , data ) =>
    await this.check(
      url,
      opt,
      async () => await Axios.put(url, params, opt),
      data || params
    );
  delete = async (url , params , opt , data ) => {
    await this.check(
      url,
      opt,
      async () => await Axios.delete(url, { ...opt, data: params }),
      data || params
    );
  };

  check = async (url , { dispatch } , fetch , params ) => {
    dispatch = dispatch || (() => {});
    dispatch({ type: 'LOADING_START' });
    let response = await fetch();
    
    switch (response.status) {
      case 200:
        dispatch({ type: url, payload: response.data, params });
        dispatch({ type: 'LOADING_END' });
        console.log('STATUS 200 RES:', response)
        return response.data;

      case 201:   
      dispatch({ type: url, payload: response.data, params });
      dispatch({ type: 'LOADING_END' });
        console.log('STATUS 201 RES:', response)
        return response.data;
      case 401:
        // if (await this.refresh()) {
        //   let response = await fetch();
        //   dispatch({ type: url, payload: response.data, params });
        //   return response.data;
        // }
        console.log('status 401', response)
        
        break;
      default:
        dispatch({
          type: url.split("/")[0] + "/" + "error",
          data: response.data,
          params,
        });
    }
    return false;
  };

  refresh = async () => {
    let refresh = localStorage.getItem("refresh");
    if (!refresh) window.location.href = "/";
    let login = await this.login(
      "token/verify",
      {},
      { headers: { Authorization: `Bearer ${refresh}` } }
    );
    return login ? true : false;
  };
  login = async (url , params , { dispatch } ) =>
    this.post(url, params, {
      dispatch: (obj ) => {
        let login = obj.payload;
        if (!login || !login.refresh){
          console.log('login',login)
          return false
        };
        localStorage.setItem("refresh", login.refresh);
        localStorage.setItem("access", login.access);
        delete login.refresh;
        delete login.access;
        localStorage.setItem("USER_DATA", JSON.stringify(login.profile));
        dispatch(obj);
      },
    });

  logout = async (url , params , { dispatch } ) => {
    this.post(url, params, {
      dispatch: (obj ) => {
        localStorage.removeItem("refresh");
        localStorage.removeItem("access");
        localStorage.removeItem("USER_DATA");
        dispatch(obj);
      },
    });
  };
  status = () => {
    let refresh = localStorage.getItem("refresh");
    let userData = localStorage.getItem("USER_DATA");
    if (!refresh) return false;
    if (refresh == "undefined") {
      localStorage.removeItem("refresh");
      localStorage.removeItem("access");
      localStorage.removeItem("USER_DATA");
      return false;
    }

    return JSON.parse(userData || '');
  };
}
const _dataManager = new DataManager();

export default _dataManager;