import estilo from './estilo';
import {View, Text,  Image} from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <Image
          source={{uri: 'https://cdn.discordapp.com/attachments/1081216329123643412/1252430888000552991/image.png?ex=667230a8&is=6670df28&hm=fec193c3d263869c362af1bbdc9825a579b0d8919165dfe4362215843ff6edda&'}}
          style={estilo.header}
       />
          <Text style={estilo.title}>Bem-vindo ao [Nome do Site]</Text>
       <View style={estilo.Textos}>
          <Text style={estilo.Text}> Na aba Veículos, você poderá explorar uma ampla variedade de veículos disponíveis, com detalhes completos sobre cada modelo.</Text>
          <Text style={[estilo.Text, estilo.marginTop]}> Estamos aqui para ajudá-lo a encontrar o carro perfeito que atenda às suas necessidades e preferências.</Text>
       </View>
       <View style={estilo.cards}>
          <View style={estilo.card}>
              <Text style={estilo.mensage}>Sinta-se à vontade para navegar e descobrir tudo o que temos a oferecer. Se precisar de ajuda, nossa equipe está pronta para atendê-lo.</Text>
          </View>
          <View style={estilo.card}>
              <Text style={estilo.mensage}>Aproveite sua visita e boa navegação!</Text>
          </View>
       </View>
    </View>
  );
}
