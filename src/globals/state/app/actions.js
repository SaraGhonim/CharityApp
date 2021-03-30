import {
  getToken,
  setToken,
  removeToken,
  refreshToken,
} from '../../../services/token';
import { instance } from '../../../services/api';
export default {
  setCharityName: (CharityName) => ({ setState, getState }) => {
    setState({ CharityName: CharityName });
  },
  setType: (Type) => ({ setState, getState }) => {
    setState({ Type: Type });
  },
  setAddress: (Address) => ({ setState, getState }) => {
    setState({ Address: Address });
  },

  setexpiringToken: (expiringToken) => ({ setState, getState }) => {
    setState({ expiringToken: expiringToken });
  },
  retrieveToken: () => async ({ setState, getState }) => {
    try {
      //  get current token
      let token = await getToken();

      if (token !== null) {
        instance.defaults.headers.common['Authorization'] = 'bearer ' + token;
        // console.log('AuthData getToken Driver-Info Res', res);
        setState({
          token: token,
        });
      }
    } catch (err) {
      console.log('err', err);
    }
  },
  setToken1: (JWT) => async ({ setState, getState }) => {
    try {
      setToken(JWT)
        .then(() => {
          instance.defaults.headers.common['Authorization'] = 'bearer ' + JWT;
          setState({ token: JWT });
        })
        .catch((e) => {
          console.log(JWT);
          console.log('Error on StoreToken', e);
        });
      // setState
    } catch (err) {
      console.log('err', err);
    }
  },
  deleteToken: () => async ({ setState, getState }) => {
    try {
      //  get current token
      await removeToken();
      setState({ token: null });
    } catch (err) {
      console.log('err', err);
    }
    console.log('deleted');
  },
};
