import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../modules/LogIn';
import SignUpScreen from '../../modules/SignUp';
import PasswordResetScreen from '../../modules/PasswordReset';
import ForgetPasswordScreen from '../../modules/ForgetPassword';
import ChooseScreen from '../../modules/Choose';
import CharityInfoScreen from '../../modules/CharityInfo';
import SignUp2Screen from '../../modules/SignUp2';

import Splash from '../../modules/Mounter/Components/Splash';
import HomeScreen from '../../modules/Home';
import ModeratorsScreen from '../../modules/Moderators';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Choose" component={ChooseScreen} />
        <Stack.Screen name="CharityInfo" component={CharityInfoScreen} />
        <Stack.Screen name="SignUp2" component={SignUp2Screen} />

        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />


        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Moderators" component={ModeratorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
