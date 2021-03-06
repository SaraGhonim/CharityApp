import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppInit} from './AppInit';

const Stack = createStackNavigator();

export const AppInitStack = () => (
	<Stack.Navigator initialRouteName="AppInit" headerMode="none">
		<Stack.Screen name="AppInit" component={AppInit} />
	</Stack.Navigator>
);
export * from './AppInit';
export * from './Slider';
