import axios from 'axios';
import Config from 'react-native-config';
import RNRestart from 'react-native-restart';
import {
  getTokenObject,
  setTokenObject,
  removeTokenObject,
} from '../services/token';
const baseOptions = {
  baseURL: Config.BASE_URL,
  timeout: 30000,
  responseType: 'json',
};
const instance = axios.create(baseOptions);
const createAxiosResponseInterceptor = () => {
  const interceptor = instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Reject promise if usual error
      if (error.response.status !== 403) {
        return Promise.reject(error);
      }

      /*
       * When response code is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response
       */
      instance.interceptors.response.eject(interceptor);
      const { refresh_token } = await getTokenObject();
      console.log(`refresh_token`, refresh_token);
      return instance
        .post('auth/refreshToken', {
          refresh_token,
        })
        .then(async (response) => {
          await setTokenObject(response.data.data);
          error.response.config.headers['Authorization'] =
            'Bearer ' + response.data.data.token;
          return instance(error.response.config);
        })
        .catch(async (error) => {
          console.log(`error at refresh token`, error);
          await removeTokenObject();
          // RNRestart.Restart();
          return Promise.reject(error);
        })
        .finally(createAxiosResponseInterceptor);
    },
  );
};
createAxiosResponseInterceptor();
export { instance };
