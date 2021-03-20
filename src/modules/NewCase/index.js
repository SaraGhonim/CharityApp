import React ,{useState, useRef} from 'react';
import {View,useWindowDimensions,TouchableOpacity,ScrollView,TextInput ,CheckBox,StyleSheet} from 'react-native';
import {Icon,Text} from 'react-native-magnus';

// import {SafeAreaView} from 'react-native-safe-area-context';
//  import {styles} from './Index.Styles';
import CasesList from '../../components/CasesList'
import {colorPalette} from '../../utils/theme';
import {Header} from '../../components/Header'
import {useForm, Controller} from 'react-hook-form';

 
 const NewCase = ({navigation}) => {
	const [Password, setPassword] = useState('');
	const [isSelected, setSelection] = useState(false);

	const {control, handleSubmit, errors} = useForm();
	const onSubmit = (data) => {
	//   navigation.navigate('Home');
	  console.log(data);
	};
	const {width, height} = useWindowDimensions();


	return(
		<ScrollView style={{flex:1,backgroundColor:'white'}}>
       
       <Header name="New Case"  navigation={navigation}/>
	   <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Name"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="name"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.name && <Text>This is required.</Text>}


		<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="number"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.number && <Text>This is required.</Text>}


		<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="ssn"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="ssn"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.ssn && <Text>This is required.</Text>}



		<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Family members count"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="count"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.count && <Text>This is required.</Text>}

		<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Address"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="Address"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.Address && <Text>This is required.</Text>}
		<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              placeholder="Poverty Level"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="PovertyLevel"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.PovertyLevel && <Text>This is required.</Text>}




		<Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
			multiline

              placeholder="Notes"
              placeholderTextColor={colorPalette.secondaryDark}
              autoCapitalize="none"
              keyboardType="default"
              underlineColorAndroid={
                colorPalette.secondaryDark
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
          name="Notes"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.Notes && <Text>This is required.</Text>}

		<View style={styles.checkboxContainer}>
		<CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Is hidden?</Text>
</View>


<View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 15,
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
            Add Case
          </Text>
        </TouchableOpacity>
		</View>
    </ScrollView>
	
			)
};
export default NewCase

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: "center",
	  justifyContent: "center",
	},
	checkboxContainer: {
	  flexDirection: "row",
	  marginTop: 20,
	  marginHorizontal: 16
	},
	checkbox: {
	  alignSelf: "center",
	},
	label: {
	  margin: 8,
	},
  });



