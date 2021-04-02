

import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Div, Text} from 'react-native-magnus';
import axios from 'axios'
import {
  StatusBar,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  useWindowDimensions,ScrollView,ActivityIndicator
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
import SnackBar from 'react-native-snackbar-component';

const SignUp2 = ({navigation}) => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};


  const [UserName, setUserName] = useState('');
  const [Code, setCode] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);
  const [{Type,Address,CharityName,token},{setToken1,setexpiringToken}] = useApp();

  const emailRef = useRef(null);


  const passwordRef = useRef(null);
  const phoneRef = useRef(null);

  const lastNameRef = useRef(null);
   const [Errors, setErrors] = useState(null);
   const [Message, setMessage] = useState(null);

  const {width, height} = useWindowDimensions();
  const updateSecureTextEntry = () => {
    setSecureText(!secureTextEntry);
  };

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    setMessage(null)
    setErrors(null)
    setLoading(true)
    console.log('width', width);
    console.log('height', height);
    // navigation.navigate('Choose')
    axios
      .post(`https://charity-handlig-app.herokuapp.com/api/auth/signup`, {
        email: data.email,
        password: data.password,
        firstName: data.name,
        lastName:data.lastName,
        phoneNumber: data.phone,

        account :{
          name:CharityName,
          type:Type, 
          address:Address
        }
        // ActivationCode: data.ActivationCode,
      })
      .then((response) => {
        console.log('successsssssssssssssssssssssssss')
        console.log('response.data', response.data.refresh_token);
        setMessage(response.data.message)

        // setLoading(true);
        //  setToken1(response.data.refresh_token);
        //  setexpiringToken(response.data.token)
        setLoading(false);
        //  navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        console.log(error.response);
        setLoading(false);
         setErrors(error.response.data.error);

        // Handle returned errors here
      });
    // navigation.navigate('Home');
    console.log(data.password);

  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
        Sign up
      </AppText>
      <View style={{alignItems: 'center'}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="First Name"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.name ? 'red' : colorPalette.secondaryDark
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
                lastNameRef.current.focus();
               
              }}
            />
          )}
          name="name"
          rules={{required: true}}
          defaultValue=""
        />
        </View>
        {errors.name &&  <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>}

        <View style={{alignItems: 'center'}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Last Name"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.lastName ? 'red' : colorPalette.secondaryDark
              }
              style={{
                marginTop: 12,
                marginHorizontal: 20,
                width: width * 0.9,

                color: '#000',
              }}
              // style={styles.input}
              onBlur={onBlur}
              ref={lastNameRef}
              onChangeText={(value) => onChange(value)}
              value={value}
              returnKeyType="next"
              editable={!loading}
              onSubmitEditing={() => {
                emailRef.current.focus();
               
              }}
            />
          )}
          name="lastName"
          rules={{required: true}}
          defaultValue=""
        />
        </View>
        {errors.lastName &&  <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>}
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
                errors.email? 'red' : colorPalette.secondaryDark
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
              ref={emailRef}
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
        {errors.email &&  <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>}
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
                errors.password? 'red' : colorPalette.secondaryDark
              }
              style={{
                width: width * 0.9,
                marginTop: 12,
                marginHorizontal: 20,
                color: '#000',
              }}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              ref={passwordRef}
              returnKeyType="next"
              editable={!loading}
              onSubmitEditing={() => {
                phoneRef.current.focus();
               
              }}
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""


        />
        </View>
        {errors.password &&  <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>}
        <View style={{alignItems: 'center'}}>

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Phone number"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
           errors.phone? 'red' : colorPalette.secondaryDark
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
              ref={phoneRef}
              returnKeyType="next"
              editable={!loading}


              onSubmitEditing={               
              handleSubmit(onSubmit)}
            />
          )}
          name="phone"
          rules={{required: true}}
          defaultValue=""

        />
        </View>
        {errors.phone &&  <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>}
        {/* <View style={{alignItems: 'center'}}>

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Activation code"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                Password.includes(' ') ? 'red' : colorPalette.secondaryDark
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
              ref={codeRef}
              editable={!loading}
              onSubmitEditing={               
              handleSubmit(onSubmit)}
            />
          )}
          name="ActivationCode"
          rules={{required: true}}
          defaultValue=""
        />
        </View>
        {errors.ActivationCode &&  <Text
          style={{
            fontSize: 13,
            marginTop: 5,

            marginHorizontal: 22,
            color: colorPalette.errorColor,
          }}>
          This is required.
        </Text>} */}

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 30,
            backgroundColor: colorPalette.primary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
         { !loading?<Text
            color={colorPalette.surfaceColor}
            textAlign="center"
            fontSize={17}>
            Sign Up
          </Text>:
          <ActivityIndicator size="small" color="#fff"/>}
        </TouchableOpacity>
        <View style={{flexDirection: 'row',marginBottom:50}}>
          <Text
            // textStyle={[listTitleStyle]}
            style={{
              fontSize: 13,
              marginTop: 20,
              color: colorPalette.secondaryDark,
              textAlign: 'right',
            }}>
            Already have an account ?
          </Text>

          <Text
            onPress={() => {
              navigation.navigate('LogIn');
            }}
            // textStyle={[listTitleStyle]}
            style={{
              fontSize: 13,
              marginTop: 20,
              marginLeft: 5,
              color: colorPalette.primary,
              textAlign: 'right',
            }}>
            LOG IN
          </Text>
        </View>
        {Message ?<View style={{alignItems: 'center',backgroundColor:'white',marginTop:30}}>
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
        {Errors ?<View style={{alignItems: 'center',backgroundColor:'white'}}>
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
      marginHorizontal: width * 0.02,
    }}
    accentColor="#13743A"
    messageColor="#f00"
    // height={50}
  /> 
  <Text style={{color:'white'}} >sasadsadddddddddddddddddddddddddddddddddddddddddd</Text>
           </View> :null}
      </View>
    </ScrollView>
  );
};

export default SignUp2;
