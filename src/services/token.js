import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@token';
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token!==null) {
      return token;
    } else {
      return null;
    }
  } catch (err) {
    console.log('err', err);
    return null;
  }
  console.log('Done.')

};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (err) {
    console.log('err', err);
  }
  console.log('Done.')

};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY)
  } catch(e) {
    // remove error
    console.log('err', err);

  }

  console.log('Done.')
}
