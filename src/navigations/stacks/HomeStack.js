import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../modules/Home';
 import ModeratorsScreen from '../../modules/Moderators';
 import AddDonationScreen from '../../modules/AddDonation';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
      }}>
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Moderators" component={ModeratorsScreen} />
      <Stack.Screen name="AddDonation" component={AddDonationScreen} />

    </Stack.Navigator>
  );
};

export default HomeStack;
