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

const LogIn = ({navigation}) => {
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
          onPress={handleSubmit(onSubmit)}
          style={{
            marginVertical: 60,
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
        <View style={{flexDirection: 'row'}}>
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
          onPress={()=>{navigation.navigate('SignUp')}}
            // textStyle={[listTitleStyle]}
            style={{
              fontSize: 13,
              marginTop: 28,
              marginLeft: 5,
              color: colorPalette.primary,
              textAlign: 'right',
            }}>
            SIGN UP
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LogIn;
