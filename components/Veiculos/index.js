import estilo from './estilo';
import { View, FlatList, ScrollView } from 'react-native';
import Lista_veiculos from 'dados.js';
import CardVeiculo from '../CardVeiculo';

export default function Veiculo(props){
    return(
        <View>
            <ScrollView>
                <FlatList
                data={Lista_veiculos}
                renderItem={({item})=>
                    <CardVeiculo props={props} veiculo={item}/>
                }
                keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    );
}