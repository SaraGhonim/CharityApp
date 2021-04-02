import React, { useEffect, useState } from 'react';
import { Div, Text } from 'react-native-magnus';
import { FlatList, RefreshControl } from 'react-native';
import { instance } from '../../../../services/api';
import Item from './Item';
const PendingModerators = () => {
  const [refresh, setRefresh] = useState(false);
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadModerators = () => {
    setLoading(true);
    instance
      .get('moderators')
      .then((res) => {
        setData(res.data.data);
        setRefresh(false);
        setLoading(false);
        console.log(`res.data.data getting moderator`, res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(`err at getModerators`, err);
      });
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
  console.log(`Data`, Data);
  return (
    <Div rounded="md" flex={1}>
      {loading ? (
        <Div justifyContent="center" flex={1} alignItems="center">
          <Text fontSize="2xl" color="gray4" fontWeight="bold">
            Loading...
          </Text>
        </Div>
      ) : (
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `Moderators-item-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={Empty}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        />
      )}
    </Div>
  );
};

export default PendingModerators;
