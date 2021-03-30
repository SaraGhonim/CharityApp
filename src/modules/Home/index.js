import * as React from 'react';
import {
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Text } from 'react-native-magnus';
import { getTokenObject, removeTokenObject } from '../../services/token';
import { useApp } from '../../globals/state/app';
import { colorPalette } from '../../utils/theme';
import { notify } from '../../services/notify';

const Home = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
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
        {/* <Avatar.Icon size={24} icon="menu"/> */}
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
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
          onPress={async () => {
            await removeTokenObject();
          }}
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
          onPress={() => navigation.navigate('Moderators')}
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
        <TouchableOpacity
          onPress={async () => {
            await getTokenObject();
            notify('title', 'Description ay klam', 'success');
          }}
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
            get token object
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
