import React, {FC} from 'react';
import {View, Text, I18nManager, TouchableOpacity,Dimensions} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorPalette} from '../utils/theme'
 

const {width, height} = Dimensions.get('window');

export const Header = ({name, navigation}) => {
	const iconName = I18nManager.isRTL ? 'chevron-forward' : 'chevron-back';

	return (
		<View
			style={{
				height: 50,
				backgroundColor: '#fff',
				 alignItems: 'center',
				flexDirection: 'row',
				//    justifyContent: 'center',
				shadowColor:'gray',
				shadowOpacity: 1,
				borderBottomWidth:1,
				borderBottomColor:colorPalette.secondaryDark,
				// shadowOffset:2,
			}}>

<View 
			style={{alignItems:'flex-start',justifyContent:'space-between',width:width*.29}}
			>
			
		
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				 style={{}}
				>
				<Icon
					name={iconName}
					size={22}
					color={colorPalette.primary}
					style={{marginLeft: 14}}></Icon>
			</TouchableOpacity>
			</View>
			<View 
			style={{width:width*.45}}
			>
				<Text style={{textAlign: 'center',color:colorPalette.primary,fontSize:20}}>{name}</Text>
			</View>

			<View 
			style={{width:width*.33}}
			>
			</View>
		</View>
	);
};
