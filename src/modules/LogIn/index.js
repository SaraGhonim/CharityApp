import React, {useState, useRef} from 'react';

import {Div, Text} from 'react-native-magnus';
import axios from 'axios';

import {
  View,
  TextInput,
  Button,
  Alert,StatusBar,
  TouchableOpacity,
  useWindowDimensions,ActivityIndicator
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
import SnackBar from 'react-native-snackbar-component';

const LogIn = ({navigation}) => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};

  
  const [clicked, setclicked] = useState(false);

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);
  const [{token}, {setToken1, retrieveToken,setexpiringToken}] = useApp();
  const passwordRef = useRef(null);

  const codeRef = useRef(null);
   const [Errors, setErrors] = useState(null);
   const [Message, setMessage] = useState(null);

  const {width, height} = useWindowDimensions();
  const updateSecureTextEntry = () => {
    setSecureText(!secureTextEntry);
  };

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    setMessage(null)
    setErrors(null)
    console.log('width', width);
    console.log('height', height);
    axios
      .post(`https://charity-handlig-app.herokuapp.com/api/auth/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log('successsssssssssssssssssssssssss')
        // console.log('response.data', response.data.refresh_token);
        setLoading(true);
        //  setToken1(response.data.refresh_token);
        //  setexpiringToken(response.data.token)
        setMessage(response.data.message)

        setLoading(false);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        console.log(error.response.data.error);
        setLoading(false);
        setErrors(error.response.data.error);

        // Handle returned errors here
      });
  };



  return (
    <View style={{flex:1,backgroundColor:'white'}}>
                        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

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

      <AppText
        // textStyle={[listTitleStyle]}
        style={{
          fontSize: 18,
          marginBottom: 4,
          color: colorPalette.onSecondaryLight,
          marginHorizontal: 20,
        }}>
        Log in
      </AppText>
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
              returnKeyType="next"
              editable={!loading}
              onSubmitEditing={() => {
                passwordRef.current.focus();
               
              }}

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
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              

              underlineColorAndroid={
                errors.password ? 'red' : colorPalette.secondaryDark
              }
              style={{
                width: width * 0.9,
                marginTop: 29,
                marginHorizontal: 20,
                color: '#000',
              }}
              ref={passwordRef}
              editable={!loading}
              onSubmitEditing={
                handleSubmit(onSubmit)}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          rules={{required: true}}
          name="password"
          defaultValue=""
        />
      </View>

      {errors.password && (
        <Text
          style={{
            fontSize: 13,
            marginHorizontal: 22,
            marginTop: 5,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>
      )}
      <View style={{alignItems: 'flex-end'}}>
        <Text
          onPress={()=>{navigation.navigate('ForgetPassword')}}

          // textStyle={[listTitleStyle]}
          style={{
            fontSize: 13,
            marginTop: 28,
            marginHorizontal: 17,
            color: colorPalette.onSecondaryLight,
            textAlign: 'right',
          }}>
          Foregt Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={
    
            handleSubmit(onSubmit)
          }
          style={{
            marginVertical: 60,
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
            Log in
          </Text>:
          <ActivityIndicator size="small" color="#fff"/>}

        </TouchableOpacity>
        <View style={{flexDirection: 'row',}}>
          <Text
            // textStyle={[listTitleStyle]}
            style={{
              fontSize: 13,
              marginTop: 28,
              color: colorPalette.secondaryDark,
              textAlign: 'right',
            }}>
            Don't have an account ?
          </Text>

          <Text
          onPress={()=>{navigation.navigate('Choose')}}
            // textStyle={[listTitleStyle]}
            style={{
              fontSize: 13,
              marginTop: 28,
              marginLeft: 5,
              // marginBottom:10,
              color: colorPalette.primary,
              textAlign: 'right',
            }}>
            SIGN UP
          </Text>
         
        </View>
        {Message ?
        <View style={{alignItems: 'center',backgroundColor:'white',marginTop:30}}>
         <SnackBar
    visible={true}
     textMessage={Message}

    actionHandler={() => {
      setMessage(null);
    
      console.log('snackbar button clicked!');
    }}
    // actionText="Try Again"
    backgroundColor="rgb(216, 208, 208)" 
    containerStyle={{
      borderRadius: 15,
       // marginTop:20,
      marginHorizontal: width * 0.02,
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
    backgroundColor="rgb(216, 208, 208)"
    containerStyle={{
      borderRadius: 15,
       // marginTop:20,
      marginHorizontal: width * 0.03,
    }}
    accentColor="red"
    messageColor="red"
    // height={50}
  /> 
  <Text style={{color:'white'}} >sasadsadddddddddddddddddddddddddddddddddddddddddd</Text>
           </View> :null}

      </View>


    </View>
  );
};

export default LogIn;

