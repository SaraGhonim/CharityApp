import React, { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  View,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import Image from 'react-native-fast-image';
import pattern from '../../assets/images/logo.png';
import { Text, Select, Button } from 'react-native-magnus';
import { useForm, Controller } from 'react-hook-form';
import { useApp } from '../../globals/state/app';
import { colorPalette } from '../../utils/theme';
import { AppText } from '../../AppText';
import { human, material, systemWeights } from 'react-native-typography';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

const CharityInfo = ({ navigation }) => {
  const listTitleStyle = { ...material.headlineObject, ...systemWeights.bold };

  const [selectValue, setSelectedValue] = useState([]);
  const selectRef = React.createRef();

  const [secureTextEntry, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);

  const typeRef = useRef(null);
  const AddressRef = useRef(null);
  const [
    { CharityName, Type, Address },
    { setCharityName, setType, setAddress },
  ] = useApp();

  const codeRef = useRef(null);
  // const [errors, setErrors] = useState(null);

  const { width, height } = useWindowDimensions();

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(`data.name`, data.name);
    console.log(`Type`, Type);

    console.log(`CharityName`, CharityName);
    //  setCharityName('data.name');
    console.log(`Address`, Address);

    // setAdress(data.Address);
    // setType(data.type);
    navigation.navigate('SignUp2');
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: width * 0.5,
            height: width * 0.5,
            top: 40,
            marginBottom: 10,
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
          Charity Info
        </AppText>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              placeholder="Charity Name"
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
              onChangeText={(value) => {
                onChange(value);
                setCharityName(value);
              }}
              value={value}
              returnKeyType="next"
              editable={!loading}
              onSubmitEditing={() => {
                selectRef.current.open();
              }}
            />
          )}
          name="name"
          rules={{ required: true }}
          defaultValue=""
        />
      </View>
      {errors.name && (
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

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: colorPalette.secondaryDark,
          marginHorizontal: 20,
        }}>
        <Text
          block
          my={12}
          bg="white"
          color={selectValue.length ? '#000' : colorPalette.secondaryDark}
          onPress={() => {
            if (selectRef.current) {
              selectRef.current.open();
            }
          }}>
          {selectValue.length ? selectValue[0] : 'Type'}
        </Text>
        <Select
          onSelect={(value) => {
            setSelectedValue([value.value]);
            setType(value.key);
            console.log(`selectValue`, selectValue);
            console.log(`Type`, Type);

            AddressRef.current.focus();
          }}
          h={200}
          ref={selectRef}
          value={selectValue}
          title="Who are you ?"
          mt="md"
          pb="2xl"
          // message="Who are you?"
          roundedTop="2xl"
          data={[
            { key: 'charity', value: 'Charity' },
            { key: 'charitableTeam', value: 'Charitable Team' },
            { key: 'individual', value: 'Individual' },
          ]}
          renderItem={(item, index) => (
            <Select.Option value={item} py="md" px="xl">
              <Text> {item.value}</Text>
            </Select.Option>
          )}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              placeholder="Address"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                errors.Address ? 'red' : colorPalette.secondaryDark
              }
              style={{
                marginTop: 12,
                marginHorizontal: 20,
                width: width * 0.9,

                color: '#000',
              }}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => {
                onChange(value);
                setAddress(value);
              }}
              value={value}
              ref={AddressRef}
              editable={!loading}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
          name="Address"
          rules={{ required: true }}
          defaultValue=""
        />
      </View>
      {errors.Address && (
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
      <View style={{ alignItems: 'center' }}>
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
          {!loading ? (
            <Text
              color={colorPalette.surfaceColor}
              textAlign="center"
              fontSize={17}>
              Next
            </Text>
          ) : (
            <ActivityIndicator size="small" color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharityInfo;
