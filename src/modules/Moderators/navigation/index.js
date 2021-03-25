// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CurrentModerator from './currentModerators/List';
import pendingModerator from './pendingModerators/List';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import {Text} from 'react-native'
// const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
  //   const {colors} = useTheme();
  return (
    // <Tab.Navigator
    //   style={{
    //     borderRadius: 5,
    //   }}
    //   tabBarOptions={{
    //     pressColor: 'rgba(255,255,255,0)',
    //     labelStyle: {
    //       // color: colors.Typography.primaryHex,
    //       fontSize: 13,
    //       fontWeight: 'bold'
    //     },
    //     style: {
    //       marginHorizontal: 25,
    //       marginBottom: 5,
    //       borderRadius: 6,
    //     },

    //     indicatorStyle: {
    //       height: '3%',
    //     },
    //   }}>
    //   <Tab.Screen name={'Current'} component={CurrentModerator} />
    //   <Tab.Screen name={'pending'} component={pendingModerator} />
    // </Tab.Navigator>
    <Text>Sara</Text>
  );
};
export default MyTabs;
