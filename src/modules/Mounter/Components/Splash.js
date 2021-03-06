import React from 'react';
import {Div, Text} from 'react-native-magnus';
import Image from 'react-native-fast-image';
import pattern from '../../../assets/images/logo.png';
import {Button, TouchableOpacity,StatusBar, useWindowDimensions} from 'react-native';
import {colorPalette} from '../../../utils/theme';
import {AppText} from '../../../AppText';
import {human, material, systemWeights} from 'react-native-typography';

 const Splash = ({navigation}) => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};

  const {width, height} = useWindowDimensions();
  return (
    <Div
      bg={colorPalette.surfaceColor}
      flex={1}
      // justifyContent="center"
      alignItems="center">
                          <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Image
        style={{
          width: width * 0.5,
          height: width * 0.5,
          top: 40,
          marginBottom: 60,
        }}
        source={pattern}
        resizeMode={Image.resizeMode.contain}
      />
      <Text
        color={colorPalette.primaryDark}
        fontSize={30}
        letterSpacing={1}
        fontWeight="bold">
        Welcome
      </Text>

      <AppText
        textStyle={[listTitleStyle]}
        style={{fontWeight: 'bold', fontSize: 15, marginBottom: 4 ,color:colorPalette.secondaryDark}}>
         We Try to make things easier for you
      </AppText>

    
      <TouchableOpacity
      onPress={() => navigation.navigate('LogIn')}
        style={{
          marginTop: 60,
          backgroundColor: colorPalette.primary,
          borderRadius: 10,
          width: width * 0.8,
          height: height * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          color={colorPalette.surfaceColor}
          textAlign="center"
          fontSize={17}>
          Log in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{
          marginTop: 20,
          backgroundColor: colorPalette.secondary,
          borderRadius: 10,
          width: width * 0.8,
          height: height * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          color={colorPalette.onSecondaryLight}
          textAlign="center"
          fontSize={17}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </Div>
  );
};
export default Splash