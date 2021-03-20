import React ,{FC} from 'react';
import {View, Text,Button,TouchableOpacity} from 'react-native';
import {colorPalette} from '../utils/theme'
import {Icon} from 'react-native-magnus';

 const ItemSeason = ({item}) => {

    return(
        <View style={{margin:10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
            <View style={{flex:.45,}}>

            
    <TouchableOpacity style={{height:50,}}>
        
        <Text style={{fontSize:17}}>{item.name}</Text>
        <Text style={{fontSize:14,color:'gray'}}>cases : {item.number}</Text>
        </TouchableOpacity>

        </View>
        <View style={{flex:.25}}>
    <Text style={{fontSize:14,color:'gray'}}>balance:</Text>
    <Text style={{fontSize:14,color:'gray'}}> 1000</Text>

</View>
        <View style={{flex:.35}}>

        <TouchableOpacity 
        onPress={() => navigation.navigate('NewCase')}
        style={{flexDirection: 'row'}}>
             <Icon name="money-bill-alt" color ={colorPalette.primary} fontSize={22} fontFamily="FontAwesome5" />
             <Text style={{fontSize:14,color:'gray'}}> add donation</Text>

             </TouchableOpacity>

             <TouchableOpacity 
        onPress={() => navigation.navigate('NewCase')}
        style={{flexDirection: 'row'}}>
             <Icon name="list" color ={colorPalette.primary} fontSize={22} fontFamily="FontAwesome" />
             <Text style={{fontSize:14,color:'gray'}}> cases</Text>

             </TouchableOpacity>
             </View>      

    </View>
        
        )
};
export default ItemSeason