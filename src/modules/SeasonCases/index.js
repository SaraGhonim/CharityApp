import React ,{FC} from 'react';
import {View, Text,Button,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-magnus';

// import {SafeAreaView} from 'react-native-safe-area-context';
//  import {styles} from './Index.Styles';
import SeasonCasesList from '../../components/SeasonCases'
import {colorPalette} from '../../utils/theme';
import {Header} from '../../components/Header'

 const SeasonCases = ({navigation}) => {
	return(
    <View style={{flex:1,backgroundColor:'white'}}>
       
       <Header name="Season Cases"  navigation={navigation}/>
        <SeasonCasesList/>
<View style={{alignItems:'flex-end',margin:14}}>
        {/* <TouchableOpacity 
        onPress={() => navigation.navigate('NewCase')}
        style={{width:40,height:40,borderRadius:20,backgroundColor:colorPalette.primary,justifyContent: 'center',alignItems: 'center'}}>
             <Icon name="plus" color ="white" fontSize={22} fontFamily="AntDesign" />
             </TouchableOpacity> */}
             </View>
    </View>
        
        )
};
export default SeasonCases


