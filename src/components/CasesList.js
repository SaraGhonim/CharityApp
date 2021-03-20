import React ,{FC} from 'react';
import {View, Text,Button,FlatList} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
//  import {styles} from './Index.Styles';
import {colorPalette} from '../utils/theme'

 import Item from './Item';

 const CasesList = ({navigation}) => {
    const renderItem = (props) => <Item {...props} />;

	return(
    <View style={{height:300,}}>
        <View style={{height:250,}}> 
            <FlatList
            data={[{key:'1',name:'m7md',number:'01232394810'},
                   {key:'2',name:'aya',number:'01137823771'} ,
                {key:'3', name:'samar',number:'01038729830'}
                
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
export default CasesList