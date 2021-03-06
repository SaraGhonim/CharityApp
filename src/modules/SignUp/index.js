import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Div, Text} from 'react-native-magnus';

import {StatusBar,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useApp} from '../../globals/state/app';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';

const SignUp = ({navigation}) => {
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
        Sign up
      </AppText>
      <View style={{alignItems: 'center'}}>
      <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Name"
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
            />
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Email"
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
            />
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

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
                Password.includes(' ') ? 'red' : colorPalette.secondaryDark
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
          name="Password"
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Phone number"
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
            />
          )}
          name="Phone"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

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
            />
          )}
          name="ActivationCode"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

      </View>
     
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 50,
            backgroundColor: colorPalette.primary,
            borderRadius: 10,
            width: width * 0.8,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom:10
          }}>
          <Text
            color={colorPalette.surfaceColor}
            textAlign="center"
            fontSize={17}>
            Sign Up
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
           Already have an account ?
          </Text>

          <Text
              onPress={()=>{navigation.navigate('LogIn')}}
            // textStyle={[listTitleStyle]}
            style={{
              fontSize: 13,
              marginTop: 28,
              marginLeft: 5,
              color: colorPalette.primary,
              textAlign: 'right',
            }}>
            LOG IN
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
