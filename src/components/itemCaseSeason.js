import React ,{FC} from 'react';
import {View, Text,Button,TouchableOpacity} from 'react-native';
import {colorPalette} from '../utils/theme'
import {Icon} from 'react-native-magnus';

 const ItemCaseSeason = ({item}) => {

    return(
        <View style={{margin:10,flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{flex:.95}}>

            
    <TouchableOpacity style={{height:40,}}>
        
        <Text style={{fontSize:17}}>{item.name}</Text>
        <Text style={{fontSize:14,color:'gray'}}>{item.number}</Text>
        </TouchableOpacity>

        </View>
        <View style={{alignItems: 'center',justifyContent:'center',flex:.18}}>

        <TouchableOpacity 
        onPress={() => navigation.navigate('NewCase')}
        style={{width:30,height:30,borderRadius:15,justifyContent: 'center',alignItems: 'center'}}>
             <Icon name="check" color ={colorPalette.primary} fontSize={22} fontFamily="AntDesign" />
             </TouchableOpacity>
             </View>      

    </View>
        
        )
};
export default ItemCaseSeason