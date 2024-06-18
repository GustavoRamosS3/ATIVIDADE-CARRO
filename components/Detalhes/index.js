import estilo from "./estilo";
import {View, Text, ScrollView} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes(props) {
    let veiculo = props.route.params;
    console.log(veiculo);
    const voltar = () => { props.navigation.goBack(); };
    return (
        <View style={estilo.container}>
            <View style={estilo.head}>
                <Ionicons name="arrow-back-outline" size={24} color="#e11138" onPress={voltar} />
                <Text style={estilo.head_title}>
                    Detalhes
                </Text>
            </View>
            <View style={estilo.body}>
                <View style={estilo.slides}>
                    <ScrollView horizontal={true}>
                        {
                            veiculo.fotos.map(foto=>(
                                <Image style={estilo.foto} source={`../../assets/img_veiculos/${foto}`}/>)
                            )
                        }
                    </ScrollView>
                </View>
                <View style={estilo.info}>
                        <Text style={estilo.titulo}>{veiculo.fabricante} {veiculo.modelo}</Text>                        
                        <Text style={estilo.valor}>{`Preço : R$${veiculo.preco}`}</Text>
                        <Text style={estilo.valor}>{`Motorizacao : ${veiculo.motorizacao}`}</Text>
                        <Text style={estilo.valor}>{`Ano : ${veiculo.ano}`}</Text>
                        <Text style={estilo.valor}>{`KM : ${veiculo.km}`}</Text>
                        <Text style={estilo.valor}>{`Cor : ${veiculo.cor}`}</Text>
                        <Text style={estilo.valor}>{`Cambio : ${veiculo.cambio}`}</Text>
                        <Text style={estilo.valor}>{`Portas : ${veiculo.portas}`}</Text>                        
                </View>
            </View>
        </View>
    ); 
}