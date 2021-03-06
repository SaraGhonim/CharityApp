import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './stacks/DrawerNavigator';

//  import DrawerNavigator from './stacks/HomeStack';

const Navigator = () => {
  return (
    <NavigationContainer >
       <DrawerNavigator/> 
    </NavigationContainer>
  );
};

export default Navigator;
