import Axios from 'axios';
import {alertRef} from '../Components/UI/NativeAlert';
import {store} from '../redux/store/configureStore';
import AuthAction from '../redux/reducers/auth/actions';
import {API_BASE_URL, ENABLE_API_LOGS} from '../utils/constants';

const getTodoList = 'api/todos';
const createTodo = 'api/todos';
const updateTodo = 'api/todos';
const deleteTodo = 'api/todos';

class AppsApi {
  axios;
  getApi;
  postApi;
  patchApi;
  deleteApi;
  baseUrl;
  handleResponse;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.axios = Axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      validateStatus: status => true,
    });

    this.handleResponse = async (response, url, data, saveResponse) => {
      console.log('response====>>', response);
      const res = response.data;
      if (ENABLE_API_LOGS) {
        console.group('API');
        console.log('===> ~ API URL -->', `/${url}`);
        console.log('===> ~ API body -->', JSON.stringify(data) || '-');
        console.log('===> ~ API Response -->', res);
        console.groupEnd('API');
      }

      if (res.status && res.status === 200) {
        if (typeof saveResponse === 'function') {
          saveResponse(res, data);
        }
        return res;
      }

      if (res.statusCode && res.statusCode === 400) {
        alertRef?.current?.errorToast(res?.error, res?.message);
      }
      if (res.status === 0) {
        alertRef?.current?.errorToast(res?.error, res?.message);
      }
      if (res.message && Array.isArray(res.message)) {
        alertRef?.current?.errorToast(
          res.message[0] || 'Oops! Something went wrong!',
        );
      }
      if (res?.message && typeof res?.message === 'string') {
        alertRef?.current?.errorToast(res?.message);
      }
      if (res) {
        if (typeof saveResponse === 'function') {
          saveResponse(res, data);
        }
        return res;
      }
      throw res;
    };

    this.initSetup();
  }

  initSetup = () => {
    this.getApi = (url, {axiosConfig = {}, saveResponse}) => {
      const token = getToken();
      if (token) {
        this.axios.defaults.headers.Authorization = `Bearer ${token}`;
      }

      return this.axios
        .get(url, axiosConfig)
        .then(res => this.handleResponse(res, url, {}, saveResponse))
        .catch(e => console.error(e));
    };

    this.postApi = (url, {params = {}, axiosConfig = {}, saveResponse}) => {
      const token = getToken();
      if (token) {
        this.axios.defaults.headers.Authorization = `Bearer ${token}`;
      }
      return this.axios
        .post(url, params, axiosConfig)
        .then(res => this.handleResponse(res, url, params, saveResponse))
        .catch(e => console.error(e));
    };

    this.patchApi = (url, {params = {}, axiosConfig = {}, saveResponse}) => {
      console.log('params==>>', params);
      return this.axios
        .put(url, params, axiosConfig)
        .then(res => this.handleResponse(res, url, params, saveResponse))
        .catch(e => {
          console.error(e);
        });
    };

    this.deleteApi = (url, {axiosConfig = {}, saveResponse}) => {
      return this.axios
        .delete(url, axiosConfig)
        .then(res => this.handleResponse(res, url, {}, saveResponse))
        .catch(e => {
          console.error(e);
        });
    };
  };

  // get Call
  // https://api.staging.sumize.io/api/todos?filters[desciption][$contains]=testing
  getTodoList = search =>
    this.getApi(`${getTodoList}?filters[desciption][$contains]=${search}`, {});
  createTodo = params => this.postApi(createTodo, {params});
  updateTodo = (params, id) => this.patchApi(`${updateTodo}/${id}`, {params});
  deleteTodo = id => this.deleteApi(`${deleteTodo}/${id}`, {});
}

const appsApi = new AppsApi(API_BASE_URL);
export default appsApi;

function getToken() {
  if (store && typeof store.getState === 'function') {
    return store.getState().auth.token;
  }
  return '';
}
