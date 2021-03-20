import * as React from 'react';
import {
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Icon, Text} from 'react-native-magnus';

import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';

const Home = ({navigation}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

    
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name="menu"
                color="secondary"
                fontFamily="Feather"
                // position="absolute"
                size={10}
                fontSize={20}
              />
            </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            marginTop: 60,
            backgroundColor: colorPalette.primary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color="white" textAlign="center" fontSize={17}>
            Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginTop: 20,
            backgroundColor: colorPalette.primary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color="white" textAlign="center" fontSize={17}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
   onPress={() => navigation.navigate('Moderators')}          style={{
            marginVertical: 20,
            backgroundColor: colorPalette.secondary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color="#000" textAlign="center" fontSize={17}>
            Moderators
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
   onPress={() => navigation.navigate('AddDonation')}   
          style={{
            marginVertical: 20,
            backgroundColor: colorPalette.secondary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color="#000" textAlign="center" fontSize={17}>
            Add Donation
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
