import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {FlatList} from 'react-native';
import Item from './Item';
const PendingModerators = () => {
  const data = [
    {name: 'Aalaa', balance: 5},
    {name: 'Eman', balance: 55},
    {name: 'Sarah', balance: 555},
  ];
  const renderItem = ({item}) => <Item {...item} />;
  return (
    <Div bg="secondary" rounded="md" flex={1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `PendingModerators-item-${index}`}
      />
    </Div>
  );
};

export default PendingModerators;
