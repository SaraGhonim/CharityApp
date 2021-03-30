import React from 'react';
import { Div, Text, Icon, Avatar, Button } from 'react-native-magnus';
import { instance } from '../../../../services/api';

const Item = ({ firstname, uid }) => {
  const handleModeratorRequest = (status) => {
    console.log(`status`, status);
    instance
      .post(`moderators/${status}`, {
        uid,
      })
      .then((res) => {
        console.log(
          `status, res.data at handleModeratorRequest `,
          status,
          res.data,
        );
      })
      .catch((err) => console.log(`error at handleModeratorRequest`, err));
  };
  const icons = [
    {
      name: 'check',
      color: 'secondary',
      handle: () => handleModeratorRequest('acceptRequest'),
    },
    {
      name: 'close',
      color: 'alert',
      handle: () => handleModeratorRequest('rejectRequest'),
    },
  ];

  return (
    <Div bg="white" flex={1} row px="sm" py="md" m="sm" rounded="md">
      <Div flex={1}>
        <Avatar bg="gray3" fontSize="2xl" color="secondary">
          {firstname.charAt(0).toUpperCase()}
        </Avatar>
      </Div>

      <Div flex={5} ml="lg">
        <Div justifyContent="center">
          <Text fontSize="xl" fontWeight="bold">
            {firstname}
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
          <Button bg="white" onPress={icon.handle}>
            <Icon
              name={icon.name}
              fontSize="3xl"
              color={icon.color}
              fontFamily="AntDesign"
            />
          </Button>
        ))}
      </Div>
    </Div>
  );
};

export default Item;
