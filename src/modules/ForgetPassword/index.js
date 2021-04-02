import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SnackBar from 'react-native-snackbar-component';

import {
  View,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,ActivityIndicator,
  useWindowDimensions
} from 'react-native';
import Image from 'react-native-fast-image';
import pattern from '../../assets/images/logo.png';
import {Text} from 'react-native-magnus'
import {useForm, Controller} from 'react-hook-form';
import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
import axios from 'axios'
const ForgetPassword = ({navigation}) => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};

  const [secureTextEntry, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);
  const [{token}, {setToken1, retrieveToken}] = useApp();
  const passwordRef = useRef(null);

  const codeRef = useRef(null);
   const [Errors, setErrors] = useState(null);
   const [Message, setMessage] = useState(null);

  const {width, height} = useWindowDimensions();


  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    setLoading(true)  
    setMessage(null)
    setErrors(null)
    console.log('width', width);
    console.log('height', height);
    // navigation.navigate('Choose')
    axios
      .post(`https://charity-handlig-app.herokuapp.com/api/auth/resetPassword`, {
        email: data.email,
      })
      .then((response) => {
        setLoading(true);

        console.log(response.data.message)
        setMessage(response.data.message)
        // console.log('response.data', response.data.refresh_token);
        // setToken1(response.data.refresh_token);
        setLoading(false);
        //  navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        console.log(error.response.data.error);
        setLoading(false);
        setErrors(error.response.data.error);
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
          Forget password ?
        </AppText>
      </View>

      <View style={{alignItems: 'center'}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Email"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.email ? 'red' : colorPalette.secondaryDark
              }
              style={{
                marginTop: 12,
                marginHorizontal: 20,
                width: width * 0.9,

                color: '#000',
              }}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{required: true}}
          defaultValue=""
        />
      </View>
      {errors.email && (
        <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>
      )}

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 60,
            backgroundColor: colorPalette.primary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
         
          { !loading?<Text
            color={colorPalette.surfaceColor}
            textAlign="center"
            fontSize={17}>
            Send me a mail
          </Text>:
          <ActivityIndicator size="small" color="#fff"/>}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
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
            Back to Log In
          </Text>
        </TouchableOpacity>
      </View> 
      {Message ?<View style={{alignItems: 'center',backgroundColor:'white',marginTop:40}}>
         <SnackBar
    visible={true}
     textMessage={Message}

    actionHandler={() => {
      setMessage(null);
    
      console.log('snackbar button clicked!');
    }}
    // actionText="Try Again"
    backgroundColor="rgb(216, 208, 208,.6)" 
    containerStyle={{
      borderRadius: 15,
       // marginTop:20,
      marginHorizontal: width * 0.03,
    }}
    accentColor="#13743A"
    messageColor="#13743A"
    // height={50}
  /> 
  <Text style={{color:'white'}} >sasadsadddddddddddddddddddddddddddddddddddddddddd</Text>
           </View> :null}

      {Errors ?<View style={{alignItems: 'center',backgroundColor:'white',marginTop:40}}>
         <SnackBar
    visible={true}
     textMessage={Errors}

    actionHandler={() => {
      setErrors(null);
    
      console.log('snackbar button clicked!');
    }}
    // actionText="Try Again"
    backgroundColor="rgb(216, 208, 208,.6)" 
    containerStyle={{
      borderRadius: 15,
       // marginTop:20,
      marginHorizontal: width * 0.03,
    }}
    accentColor="#f00"
    messageColor="#f00"
    // height={50}
  /> 
  <Text style={{color:'white'}} >sasadsadddddddddddddddddddddddddddddddddddddddddd</Text>
           </View> :null}
    </View>
  );
};

export default ForgetPassword;
