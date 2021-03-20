import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,FlatList
} from 'react-native';
import {colorPalette} from '../../utils/theme';
import {AppText} from '../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
import Icon from 'react-native-vector-icons/FontAwesome';
const Moderators = () => {
  const listTitleStyle = {...material.title,}
    //  ...systemWeights.bold};

  const {width, height} = useWindowDimensions();
  return (
    <View style={{}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
     
      <Text>moderator</Text>
      
      
    </View>
  );
};

export default Moderators;
