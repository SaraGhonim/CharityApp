import React from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
// import {SurahItem} from './SurahItem';
// import {styles} from '../modules/Surahs/Containers/Surahs/Index.Styles';
// import {t} from '../translations/i18n';
// import {SurahType} from '../modules/Surahs/State';
import {AppText} from '../../../AppText';
import {human, material, systemWeights} from 'react-native-typography';
// import {isIOS} from '../utils';

// TODO: Fix typing to cover FC props & render item props
export const SurahsList = ({surahs}) => {
  const listTitleStyle = {...material.display4Object, ...systemWeights.bold};

  const {width} = useWindowDimensions();
  const renderItem = ({item}) => (
      <View style={{alignItems: 'center',backgroundColor:'white'}}>

    <AppText textStyle={[listTitleStyle]}>{item.name} </AppText>
    </View>

  );

  return (
    <View
      style={{
        backgroundColor: 'purple',
        flex: 1,
        marginTop: 30,
      }}>
      <View
        style={{
          flex: 1,
          height: 35,
          alignItems: 'flex-start',
          justifyContent: 'center',
          // backgroundColor: 'red',
        }}>
        <AppText textStyle={[listTitleStyle]}>sara aaaa</AppText>
      </View>
      <FlatList
        data={[
          {key: '1', name: 'sara1'},
          {key: '2', name: 'sara2'},
        ]}
        renderItem={renderItem}
        // keyExtractor={(item) => `surah-${item.id}`}
        //TODO: Fix this fixed width
        ItemSeparatorComponent={() => <View style={{margin: width * 0.013}} />}
        style={{flex: 1, marginTop: 20}}
      />
    </View>
  );
};
