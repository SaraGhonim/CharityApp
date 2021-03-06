/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Splash} from '../Components';
 import Navigator from '../../../navigations';
 import {useApp} from '../../../globals/state/app';
 import AuthStack from '../../../navigations/stacks/AuthStack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

export const Mounter = () => {
    const [Loading, setLocalLoading] = useState(true);
   const [{conuter, token}, {retrieveToken}] = useApp();
   const _bootstrap = async () => {
    // await retrieveLanguage();
    console.log('11111', token);
    await retrieveToken();
    setLocalLoading(false);
    await console.log('22222', token);
    // await initialize();
  };
  useEffect(() => {
    _bootstrap();
  }, []);


  if (false) {
    return (<AuthStack/>);
  }
  else
  {  return <Navigator />;

  }

//   if (!token) {
//     return <AuthStack />;
//   }
//  return<Navigator/>

   
};

const styles = StyleSheet.create({
  
  engine: {
    position: 'absolute',
    right: 0,
    },
});

// export default Mounter;
