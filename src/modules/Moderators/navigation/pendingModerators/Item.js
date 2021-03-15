import React from 'react';
import {Div, Text, Icon, Avatar} from 'react-native-magnus';

const Item = ({name, balance}) => {
  const icons = [
    {name: 'check', color: 'secondary'},
    {name: 'close', color: 'alert'},
  ];
  return (
    <Div bg="white" flex={1} row px="sm" py="md" m="sm" rounded="md">
      <Div flex={1}>
        <Avatar bg="gray3" fontSize="2xl" color="secondary">
          {name.charAt(0).toUpperCase()}
        </Avatar>
      </Div>

      <Div flex={5} ml="lg">
        <Div justifyContent="center">
          <Text fontSize="xl" fontWeight="bold">
            {name}
          </Text>
        </Div>
        <Div>
          <Text fontSize="md" color="gray4">
            Moderator Request
          </Text>
        </Div>
      </Div>
      <Div row flex={2} justifyContent="space-evenly">
        {icons.map((icon) => (
          <Icon
            name={icon.name}
            fontSize="3xl"
            color={icon.color}
            fontFamily="AntDesign"
          />
        ))}
      </Div>
    </Div>
  );
};

export default Item;
