import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

// interface Props {
// 	style?: StyleProp<TextStyle>;
// 	textStyle?: StyleProp<TextStyle>;
// 	props?: any;
// }
export const AppText = ({textStyle, style, ...props}) => {
	return <Text style={[textStyle, style]}>{props.children}</Text>;
};