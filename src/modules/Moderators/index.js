import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {Button,StatusBar, TouchableOpacity, useWindowDimensions} from 'react-native';
 import {colorPalette} from '../../utils/theme';
// import {AppText} from '../../../AppText';
import {human, material, systemWeights} from 'react-native-typography';

 const Moderators = () => {
  const listTitleStyle = {...material.headlineObject, ...systemWeights.bold};

  const {width, height} = useWindowDimensions();
  return (
    <Div
      bg={colorPalette.surfaceColor}
      flex={1}
      // justifyContent="center"
      alignItems="center">

<StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Text
        color={colorPalette.primaryDark}
        fontSize={30}
        letterSpacing={1}
        fontWeight="bold">
        Welcome
      </Text>

      {/* <AppText
        textStyle={[listTitleStyle]}
        style={{fontWeight: 'bold', fontSize: 15, marginBottom: 4 ,color:colorPalette.secondaryDark}}>
         We Try to make things easier for you
      </AppText> */}

    
     
    </Div>
  );
};

export default Moderators