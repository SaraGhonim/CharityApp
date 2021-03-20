import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../modules/Home';
import HomeStack from './HomeStack';
import ModeratorsScreen from '../../modules/Moderators';


import CasesScreen from '../../modules/Cases';
import NewCaseScreen from '../../modules/NewCase';

import SeasonCasesScreen from '../../modules/SeasonCases';
import SeasonsScreen from '../../modules/Seasons';
import AddDonationScreen from '../../modules/AddDonation';


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
        <Drawer.Screen name="AddDonation" component={AddDonationScreen} />

        <Drawer.Screen name="Cases" component={CasesScreen} />
        <Drawer.Screen name="NewCase" component={NewCaseScreen} />

        <Drawer.Screen name="Seasons" component={SeasonsScreen} />
        <Drawer.Screen name="SeasonCases" component={SeasonCasesScreen} />

        {/* <Drawer.Screen name="Log out" component={} /> */}


     </Drawer.Navigator>
  );
};


export default DrawerNavigator;
