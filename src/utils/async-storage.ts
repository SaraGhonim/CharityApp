import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * get an item from the device storage asynchronously
 * @param key
 * @returns {Promise<*>}
 */
export const getKey = async (key: string) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.log(error);
	}
};

/**
 * set an item to the device storage asynchronously
 * @param key
 * @param value
 * @returns {Promise<R>}
 */
export const setKey = async (key: string, value: string) => {
	try {
		return await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.log(error);
	}
};
