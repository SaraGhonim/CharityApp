import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  View,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import Image from 'react-native-fast-image';
import pattern from '../../assets/images/logo.png';
import {Text} from 'react-native-magnus';
import {useForm, Controller} from 'react-hook-form';
import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
import axios from 'axios';
const Choose = ({navigation}) => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};

  const [secureTextEntry, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);
  const [{token}, {setToken1, retrieveToken}] = useApp();
  const passwordRef = useRef(null);

  const codeRef = useRef(null);
  // const [errors, setErrors] = useState(null);

  const {width, height} = useWindowDimensions();

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    console.log('width', width);
    console.log('height', height);
    // navigation.navigate('Choose')
    axios
      .post(
        `https://charity-handlig-app.herokuapp.com/api/auth/resetPassword`,
        {
          email: data.email,
        },
      )
      .then((response) => {
        console.log('successsssssssssssssssssssssssss');
        // console.log('response.data', response.data.refresh_token);
        setLoading(true);
        // setToken1(response.data.refresh_token);
        setLoading(false);
        //  navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        console.log(error.response);
        setLoading(false);
        // setErrors(error.response);

        // Handle returned errors here
      });
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            width: width * 0.5,
            height: width * 0.5,
            top: 40,
            marginBottom: 40,
          }}
          source={pattern}
          resizeMode={Image.resizeMode.contain}
        />
        <AppText
          textStyle={[listTitleStyle]}
          style={{
            color: colorPalette.primaryDark,
            fontSize: 24,
            marginTop: 20,
            marginHorizontal: 20,
            marginBottom: 10,
            letterSpacing: 1,
            fontWeight: 'bold',
          }}>
          Welcome
        </AppText>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
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
              Do you have an invitation ?
            </Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CharityInfo');
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
            New Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Choose;
