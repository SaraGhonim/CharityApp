import React, { useEffect, useState } from 'react';
import { Div, Text } from 'react-native-magnus';
import { FlatList, RefreshControl } from 'react-native';
import { instance } from '../../../../services/api';
import Item from './Item';
const PendingModerators = () => {
  const [refresh, setRefresh] = useState(false);
  const [Data, setData] = useState([]);
  const loadModerators = () => {
    instance
      .get('moderators/getModerators')
      .then((res) => {
        setData(res.data);
        console.log(`res.data getting moderator`, res.data);
        setRefresh(false);
      })
      .catch((err) => console.log(`err at getModerators`, err));
  };
  const onRefresh = () => {
    setRefresh(true);
    loadModerators();
  };
  useEffect(() => {
    loadModerators();
  }, []);
  const renderItem = ({ item }) => <Item {...item} />;
  const Empty = () => (
    <Div justifyContent="center" flex={1} alignItems="center">
      <Text fontSize="2xl" color="gray4" fontWeight="bold">
        No Available Data{' '}
      </Text>
    </Div>
  );
  return (
    <Div rounded="md" flex={1}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `Moderators-item-${index}`}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={Empty}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      />
    </Div>
  );
};

export default PendingModerators;
