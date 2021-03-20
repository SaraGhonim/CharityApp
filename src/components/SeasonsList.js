import React ,{FC} from 'react';
import {View, Text,Button,FlatList} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
//  import {styles} from './Index.Styles';
import {colorPalette} from '../utils/theme'

 import Item from './ItemSeason';

 const SeasonCasesList = ({navigation}) => {
    const renderItem = (props) => <Item {...props} />;

	return(
    <View style={{height:350,}}>
        <View style={{height:300,}}> 
            <FlatList
            data={[{key:'1',name:'Ramdan 2021',number:'4000'},
                   {key:'2',name:'Ramdan 2020',number:'2500'} ,
                {key:'3', name:'Ramdan 2019',number:'1000'}
                
                ]}
            renderItem={renderItem
                
            //     (  {item}  )=>{
            //     <View style={{backgroundColor:'blue'}}>
            //     <Text style={{textAlign: 'center',color:'black'}}>{item.name}</Text>
            //     </View>
            // }
        
        }
         keyExtractor={(item) => `${item.key}`}
            style={{flex: 1, marginTop: 10,
                // backgroundColor:'white'
            }}
            ItemSeparatorComponent={() => (
                <View style={{borderWidth: .5,borderColor:colorPalette.secondary,marginTop:10}} />
            )}

            />
        </View>

    </View>
        
        )
};
export default SeasonCasesList