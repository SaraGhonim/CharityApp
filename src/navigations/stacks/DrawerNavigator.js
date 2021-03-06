import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../modules/Home';
import HomeStack from './HomeStack';
import ModeratorsScreen from '../../modules/Moderators';


import SignUpScreen from '../../modules/SignUp';
import PasswordResetScreen from '../../modules/PasswordReset';
import ForgetPasswordScreen from '../../modules/ForgetPassword';


// import {DrawerContent} from '_screens/drawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 210,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />

      {/* <Drawer.Screen name="Home" component={HomeStack} /> */}
      <Drawer.Screen name="Moderators" component={ModeratorsScreen} />

      <Drawer.Screen name="Seasons" component={SignUpScreen} />
        <Drawer.Screen name="Cases" component={ForgetPasswordScreen} />
        <Drawer.Screen name="Log out" component={PasswordResetScreen} />


     </Drawer.Navigator>
  );
};


export default DrawerNavigator;
