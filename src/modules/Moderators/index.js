import React from 'react';
import {Div, Text, Input, Icon} from 'react-native-magnus';
import Moderators from './navigation/index';
const Index = () => {
  return (
    <Div flex={1}>
      <Div flex={1} justifyContent="center" px="sm">
        <Text fontWeight="700" fontSize="2xl">
          Moderators
        </Text>
      </Div>
      <Div flex={7}>
        <Moderators />
      </Div>
    </Div>
  );
};

export default Index;
