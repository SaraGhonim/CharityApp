import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Div, Text} from 'react-native-magnus';

import {
  View,
  TextInput,
  Button,
  Alert,StatusBar,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';

const PasswordReset = ({navigation}) => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};

  const [empty1, setempty1] = useState(true);
  const [empty2, setempty2] = useState(true);
  const [clicked, setclicked] = useState(false);
  const [empty3, setempty3] = useState(true);

  const [UserName, setUserName] = useState('');
  const [Code, setCode] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);
  const [{token}, {setToken1, retrieveToken}] = useApp();
  const passwordRef = useRef(null);

  const codeRef = useRef(null);
  // const [errors, setErrors] = useState(null);

  const {width, height} = useWindowDimensions();
  const updateSecureTextEntry = () => {
    setSecureText(!secureTextEntry);
  };

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    navigation.navigate('Home');
    console.log(data);
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
               Reset Password

      </AppText>

      <View style={{alignItems: 'center'}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Verification Code"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.VerificationCode ? 'red' : colorPalette.secondaryDark
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
          name="VerificationCode"
          rules={{required: true}}
          defaultValue=""
        />
      </View>
      {errors.VerificationCode && (
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
              placeholder="New password"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.newPassword ? 'red' : colorPalette.secondaryDark
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
            />
          )}
          rules={{required: true}}
          name="newPassword"
          defaultValue=""
        />
      </View>

      {errors.newPassword && (
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
        <View style={{alignItems: 'center'}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
            secureTextEntry={true}

              placeholder="Confirm password"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.confirmPass ? 'red' : colorPalette.secondaryDark
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
          name="confirmPass"
          rules={{required: true}}
          defaultValue=""
        />
      </View>
      {errors.confirmPass && (
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
          <Text
            color={colorPalette.surfaceColor}
            textAlign="center"
            fontSize={17}>
            Reset Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('LogIn')}}
          style={{
            marginVertical: 20,
            backgroundColor: colorPalette.secondary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            color='#000'
            textAlign="center"
            fontSize={17}>
            Back to Log In
          </Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default PasswordReset;
