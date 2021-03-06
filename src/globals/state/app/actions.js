import {getToken, setToken,removeToken} from '../../../services/token';
export default {
  increment: () => ({setState, getState}) => {
    const currentCount = getState().counter;
    setState({counter: currentCount + 1});
  },
  
  retrieveToken: () => async ({setState, getState}) => {
    try {
      //  get current token
      let token = await getToken();
      setState({token});
    } catch (err) {
      console.log('err', err);
    }
  },
  setToken1: (JWT) => async ({setState, getState}) => {
    try {
      // const stringToken = JSON.stringify(JWT);

      await setToken(JWT);
      // setState
      setState({token: JWT});
    } catch (err) {
      console.log('err', err);
    }
  },
  deleteToken: () => async ({setState, getState}) => {
    try {
      //  get current token
       await removeToken();
      setState({token:null});
    } catch (err) {
      console.log('err', err);
    }
    console.log('deleted')
  },
  
  
};
