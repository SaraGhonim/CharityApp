import React, { useRef, useState } from 'react';
import { Div, Text, Icon, Avatar } from 'react-native-magnus';
import { RectButton } from 'react-native-gesture-handler';
import { Animated, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Item = ({ firstName, balance, uid }) => {
  const [status, setStatus] = useState('Active');
  const StatusColor = status === 'Active' ? 'secondary' : 'gray4';
  const swipeableRef = useRef(null);
  const onSwipeItem = () => {
    setStatus('Disabled');
    swipeableRef.current.close();
  };
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <RectButton
        style={{
          backgroundColor: '#cc4b37',
          marginVertical: 6,
          marginLeft: 6,
          width: 50,
          justifyContent: 'center',
          borderRadius: 6,
        }}
        onPress={onSwipeItem}>
        <Icon
          name="do-not-disturb"
          fontSize="3xl"
          color="white"
          fontFamily="MaterialIcons"
        />
      </RectButton>
    );
  };
  return (
    <Swipeable
      friction={2}
      leftThreshold={80}
      ref={swipeableRef}
      renderLeftActions={renderLeftActions}>
      <Div
        bg="white"
        justifyContent="space-between"
        row
        flex={1}
        p="sm"
        m="sm"
        rounded="md">
        <Div flex={2} row>
          <Avatar bg="gray3" fontSize="2xl" color="secondary">
            {firstName.charAt(0).toUpperCase()}
          </Avatar>
          <Div mx="sm">
            <Text fontSize="xl" fontWeight="bold">
              {firstName}
            </Text>
            <Div row>
              <Icon
                name="primitive-dot"
                fontFamily="Octicons"
                color={StatusColor}
                fontSize="3xl"
                mr="sm"
              />
              <Text fontSize="lg">{status}</Text>
            </Div>
          </Div>
        </Div>

        <Div flex={1} row>
          <Div h="100%" w={1} mx="sm" bg={'gray3'} />
          <Text fontSize="lg" color="gray4" mr="sm">
            Balance:
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            {balance}
          </Text>
        </Div>
      </Div>
    </Swipeable>
  );
};

export default Item;
