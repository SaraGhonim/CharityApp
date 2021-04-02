import React, { useEffect, useState } from 'react';
import { Div, Text } from 'react-native-magnus';
import { FlatList, RefreshControl } from 'react-native';
import Item from './Item';
import { instance } from '../../../../services/api';
const PendingModerators = () => {
  const [Data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const loadModeratorRequests = () => {
    instance
      .get('moderators/requests')
      .then((res) => {
        setData(res.data.data);
        console.log(`res.data loadModeratorRequests`, res.data.data);
        setRefresh(false);
      })
      .catch((err) => console.log(`err at loadModeratorRequests`, err));
  };
  const onRefresh = () => {
    setRefresh(true);
    loadModeratorRequests();
  };
  useEffect(() => {
    loadModeratorRequests();
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
        keyExtractor={(item, index) => `PendingModerators-item-${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={Empty}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      />
    </Div>
  );
};

export default PendingModerators;
