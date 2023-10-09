import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/barbie3.png')}
            style={estilos.imagem}
          />
          <Button
            title="Detalhes"
            color="salmon"
            onPress={() => navigation.navigate('Detalhes1')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/barbie4.png')}
            style={estilos.imagem}
          />
          <Button
            title="Detalhes"
            color="salmon"
            onPress={() => navigation.navigate('Detalhes2')}></Button>
        </View>
      </View>

      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/ken3.png')}
            style={estilos.imagem}
          />
          <Button
            title="Detalhes"
            color="salmon"
            onPress={() => navigation.navigate('Detalhes3')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/ken4.png')}
            style={estilos.imagem}
          />
          <Button
            title="Detalhes"
            color="salmon"
            onPress={() => navigation.navigate('Detalhes4')}></Button>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  linhaImagem: {
    display: 'flex',
    flexDirection: 'row',
  },
  borda: {
    margin: '4px',
  },
});
