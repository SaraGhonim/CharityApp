import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,TextInput
} from 'react-native';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from '../../components/Header'
import {useForm, Controller} from 'react-hook-form';

const AddDonation = ({navigation}) => {
    
	const {control, handleSubmit, errors} = useForm();
	const onSubmit = (data) => {
	//   navigation.navigate('Home');
	  console.log(data);
	};
	const {width, height} = useWindowDimensions();

  const listTitleStyle = {...material.title,}
    //  ...systemWeights.bold};

 
  return (
    <View style={{backgroundColor:'white',flex: 1,}}>

      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header name="New Donation"  navigation={navigation}/>

      <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="amount"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="numeric"
              underlineColorAndroid={
                colorPalette.secondaryDark
              }
              style={{
                marginTop: 40,
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
          name="amount"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.amount && <Text>This is required.</Text>}
      
      
<View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 70,
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
            Done
          </Text>
        </TouchableOpacity>
		</View>
    </View>
  );
};

export default AddDonation;
