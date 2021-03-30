import AsyncStorage from '@react-native-async-storage/async-storage';
import { instance } from './api';
const TOKEN_KEY = '@token';
const tokenKey = '@tokenKey';
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    console.log('Done.');
    if (token !== null) {
      return token;
    } else {
      return null;
    }
  } catch (err) {
    console.log('err', err);
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (err) {
    console.log('err', err);
  }
  console.log('Done.');
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    // remove error
    console.log('err', err);
  }
  console.log('Done.');
};
export const getTokenObject = async () => {
  try {
    const tokenObject = await AsyncStorage.getItem(tokenKey);
    console.log(`token`, tokenObject);
    return tokenObject != null ? JSON.parse(tokenObject) : null;
  } catch (err) {
    console.log('error at getTokenObject', err);
  }
  console.log('Done.');
};

export const setTokenObject = async (value) => {
  try {
    const token = JSON.stringify(value);
    console.log(`token setToken`, token);

    await AsyncStorage.setItem(tokenKey, token);
  } catch (err) {
    console.log('error at setObjectValue', err);
  }
  console.log('Done.');
};
export const removeTokenObject = async () => {
  try {
    await AsyncStorage.removeItem(tokenKey);
  } catch (err) {
    console.log('error at removeValue', err);
  }
  console.log('Done.');
};

export const refreshToken = (expiringToken) => {
  let newToken = null;
  let newExpiringToken = null;
  instance
    .post(`auth/refreshToken`, {
      refresh_token: expiringToken,
    })
    .then((response) => {
      console.log(`response`, response);
      const { refresh_token, token } = response.data;
      newToken = token;
      newExpiringToken = refresh_token;
    })
    .catch((err) => console.log(`err on refreshToken`, err));
  return { newToken, newExpiringToken };
};
